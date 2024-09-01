"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";
import {
  FaCode,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaCog,
  FaList,
} from "react-icons/fa";

interface Argument {
  name: string;
  type: string;
  description: string;
}

interface Method {
  name: string;
  description: string;
  arguments: Argument[];
  returns: string;
  example: string;
  sourceCode: string;
  type: "method" | "field" | "enum" | "property";
  visibility: "public" | "private" | "protected";
}

interface ApiDocType {
  className: string;
  description: string;
  methods: Method[];
}

interface Namespace {
  name: string;
  classes: ApiDocType[];
}

const VeraCoreApiReference = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [apiDocs, setApiDocs] = useState<Namespace[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchApiDocs = async () => {
      const urls = [
        "https://raw.githubusercontent.com/Stawa/Vera/main/Vera/Library.cs",
        "https://raw.githubusercontent.com/Stawa/Vera/main/Vera/summarize/Library.cs",
        "https://raw.githubusercontent.com/Stawa/Vera/main/Vera/summarize/Response.cs",
      ];

      try {
        const contents = await Promise.all(urls.map(fetchContent));
        const [mainClassContent, summarizeContent, responseClassContent] =
          contents;

        if (!error) {
          const docs = await parseApiDocs(
            mainClassContent,
            summarizeContent,
            responseClassContent
          );
          setApiDocs(docs);
        }
      } catch (error) {
        console.error(error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchApiDocs();
  }, [error]);

  const fetchContent = async (url: string) => {
    const response = await fetch(`/api/fetch-github?url=${url}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const { data } = await response.json();
    return data;
  };

  const parseApiDocs = async (
    mainClassContent: string,
    summarizeContent: string,
    responseClassContent: string
  ): Promise<Namespace[]> => {
    const namespaces: Namespace[] = [
      {
        name: "Vera",
        classes: await parseClassContent(mainClassContent, "Vera"),
      },
      {
        name: "Vera.Summarize",
        classes: await parseClassContent(summarizeContent, "Vera.Summarize"),
      },
      {
        name: "Vera.Response",
        classes: await parseClassContent(responseClassContent, "Vera.Response"),
      },
    ];

    return namespaces;
  };

  const parseClassContent = async (
    content: string,
    namespace: string
  ): Promise<ApiDocType[]> => {
    const classRegex =
      /public\s+(?:class|enum)\s+(\w+)(?:<[^>]+>)?\s*{([\s\S]*?)^\}/gm;
    const classes: ApiDocType[] = [];
    let classMatch;

    while ((classMatch = classRegex.exec(content)) !== null) {
      const className = classMatch[1];
      const classContent = classMatch[2];
      const methods: Method[] = [
        ...parseProperties(classContent, className),
        ...parseMethods(classContent, className),
        ...parseEnums(classContent, className),
      ];

      classes.push({
        className,
        description: `Class representing ${className} in the ${namespace} namespace.`,
        methods,
      });
    }

    return classes;
  };

  const parseProperties = (
    classContent: string,
    className: string
  ): Method[] => {
    const propertyRegex =
      /(?:\[JsonPropertyName\("(\w+)"\)\]\s*)?(public|private|protected)\s+([\w<>?]+)\s+(\w+)\s*{\s*get;\s*(?:set;|private\s+set;)?\s*}/g;
    const properties: Method[] = [];
    let propertyMatch;

    while ((propertyMatch = propertyRegex.exec(classContent)) !== null) {
      const jsonName = propertyMatch[1] || null;
      const visibility = propertyMatch[2];
      const propertyType = propertyMatch[3];
      const propertyName = propertyMatch[4];

      properties.push({
        name: propertyName,
        description: `Public property of the ${className} class${
          jsonName ? ` (JSON: "${jsonName}")` : ""
        }`,
        arguments: [],
        returns: propertyType,
        example: `${className}.${propertyName}`,
        sourceCode: propertyMatch[0],
        type: "property",
        visibility: visibility as "public" | "private" | "protected",
      });
    }

    return properties;
  };

  const parseMethods = (classContent: string, className: string): Method[] => {
    const methodRegex =
      /(public|private|protected)\s+(async\s+)?([\w<>?]+)\s+(\w+)\s*\(([\s\S]*?)\)\s*{([\s\S]*?)}/g;
    const methods: Method[] = [];
    let methodMatch;

    while ((methodMatch = methodRegex.exec(classContent)) !== null) {
      const visibility = methodMatch[1];
      const isAsync = !!methodMatch[2];
      const returnType = methodMatch[3];
      const methodName = methodMatch[4];
      const argsString = methodMatch[5];
      const methodSignature = methodMatch[0];
      const methodBody = findMethodBody(
        classContent,
        methodMatch.index + methodSignature.length
      );

      methods.push({
        name: methodName,
        description: `${
          isAsync ? "Asynchronous" : "Synchronous"
        } method of the ${className} class`,
        arguments: parseArguments(argsString),
        returns: returnType,
        example: `${className}.${methodName}(...);`,
        sourceCode: methodSignature + methodBody,
        type: "method",
        visibility: visibility as "public" | "private" | "protected",
      });
    }

    return methods;
  };

  const parseEnums = (classContent: string, className: string): Method[] => {
    const enumRegex = /public\s+enum\s+(\w+)\s*{([\s\S]*?)}/g;
    const enums: Method[] = [];
    let enumMatch;

    while ((enumMatch = enumRegex.exec(classContent)) !== null) {
      const enumName = enumMatch[1];
      const enumContent = enumMatch[2];

      enums.push({
        name: enumName,
        description: `Enum type in the ${className} class`,
        arguments: [],
        returns: `enum { ${enumContent.replace(/\s+/g, " ")} }`,
        example: `${className}.${enumName}`,
        sourceCode: enumMatch[0],
        type: "enum",
        visibility: "public",
      });
    }

    return enums;
  };

  const findMethodBody = (content: string, startIndex: number): string => {
    let braceCount = 1;
    let endIndex = startIndex;

    while (braceCount > 0 && endIndex < content.length) {
      const char = content[endIndex];
      if (char === "{") {
        braceCount++;
      } else if (char === "}") {
        braceCount--;
      }
      endIndex++;
    }

    return content.substring(startIndex, endIndex);
  };

  const parseArguments = (argsString: string): Argument[] => {
    const args: Argument[] = [];
    const argRegex = /([\w<>?]+)\s+(\w+)/g;
    let argMatch;

    while ((argMatch = argRegex.exec(argsString)) !== null) {
      const argType = argMatch[1];
      const argName = argMatch[2];

      args.push({
        name: argName,
        type: argType,
        description: `Argument ${argName} of type ${argType}`,
      });
    }

    return args;
  };

  const renderClassDoc = (
    namespace: Namespace,
    classDoc: ApiDocType,
    classIndex: number
  ) => (
    <div
      key={classIndex}
      className="mb-8 bg-gradient-to-br from-white/60 to-indigo-100/60 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
      id={`${namespace.name}-${classDoc.className}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
              <span className="text-purple-700 dark:text-purple-300">
                class
              </span>{" "}
              <span className="break-words">{classDoc.className}</span>
            </h2>
            <p className="text-gray-800 dark:text-gray-200">
              {classDoc.description}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-400 dark:border-gray-600">
          {classDoc.methods.map((method, methodIndex) =>
            renderMethod(namespace, classDoc, method, methodIndex)
          )}
        </div>
      </div>
    </div>
  );

  const renderMethod = (
    namespace: Namespace,
    classDoc: ApiDocType,
    method: Method,
    methodIndex: number
  ) => (
    <div
      key={methodIndex}
      className="mt-4 bg-gradient-to-br from-white/60 to-indigo-100/60 dark:from-black/60 dark:to-indigo-900/60 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
      id={`${namespace.name}-${classDoc.className}-${method.name}`}
    >
      <div className="flex items-center mb-4">
        <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mr-2">
          {method.name}
        </h3>
        {renderVisibilityIcon(method.visibility)}
        {renderTypeIcon(method.type)}
      </div>
      <p className="mb-6 text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
        {method.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
            Arguments
          </h4>
          <ul className="space-y-3 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
            {method.arguments.length === 0 ? (
              <li className="text-gray-800 dark:text-gray-200">
                (No Arguments)
              </li>
            ) : (
              method.arguments.map((arg, argIndex) => (
                <li key={argIndex} className="text-gray-800 dark:text-gray-200">
                  <strong className="text-purple-700 dark:text-purple-300">
                    {arg.name}
                  </strong>{" "}
                  <span className="text-indigo-700 dark:text-indigo-300">
                    ({arg.type})
                  </span>
                  : {arg.description}
                </li>
              ))
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
            Returns
          </h4>
          <p className="text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
            {method.returns}
          </p>
        </div>
      </div>
      <h4 className="font-semibold mt-6 mb-3 text-indigo-700 dark:text-indigo-300">
        Example
      </h4>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto border border-gray-300 dark:border-gray-700">
        <code className="text-sm text-blue-700 dark:text-blue-300">
          {method.example}
        </code>
      </div>
      <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
        Source Code
      </h4>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto border border-gray-300 dark:border-gray-700">
        <pre className="text-sm">
          <code className="text-blue-700 dark:text-blue-300">
            {method.sourceCode.trim()}
          </code>
        </pre>
      </div>
    </div>
  );

  const renderVisibilityIcon = (
    visibility: "public" | "private" | "protected"
  ) => {
    switch (visibility) {
      case "public":
        return <FaEye className="text-green-600" title="Public" />;
      case "private":
        return <FaEyeSlash className="text-red-600" title="Private" />;
      case "protected":
        return <FaLock className="text-yellow-600" title="Protected" />;
    }
  };

  const renderTypeIcon = (type: "method" | "field" | "enum" | "property") => {
    switch (type) {
      case "method":
        return <FaCog className="text-blue-600 ml-2" title="Method" />;
      case "field":
        return <FaList className="text-orange-600 ml-2" title="Field" />;
      case "enum":
        return <FaCode className="text-purple-600 ml-2" title="Enum" />;
      case "property":
        return <FaList className="text-teal-600 ml-2" title="Property" />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-white to-indigo-100/80 dark:from-gray-900 dark:to-indigo-900 backdrop-filter backdrop-blur-lg min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-theme(spacing.16))] sm:min-h-[calc(100vh-theme(spacing.20))]">
            {isDesktop && (
              <nav className="lg:w-64 lg:mr-8 lg:border-r-4 lg:border-indigo-200 dark:lg:border-indigo-700 border-indigo-200">
                <div className="h-full bg-transparent p-6 overflow-y-auto">
                  <h2 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    Vera Core API
                  </h2>
                  <ul className="space-y-2">
                    {apiDocs.map((namespace, nsIndex) => (
                      <li key={nsIndex}>
                        <span className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {namespace.name}
                        </span>
                        <ul className="ml-4 space-y-1 mt-1">
                          {namespace.classes.map((classDoc, classIndex) => (
                            <li key={classIndex}>
                              <Link
                                href={`#${namespace.name}-${classDoc.className}`}
                              >
                                <span className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1">
                                  <FaList className="mr-2" />
                                  {classDoc.className}
                                </span>
                              </Link>
                              <ul className="ml-4 space-y-1 mt-1">
                                {classDoc.methods.map((method, methodIndex) => (
                                  <li key={methodIndex}>
                                    <Link
                                      href={`#${namespace.name}-${classDoc.className}-${method.name}`}
                                    >
                                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200 py-1">
                                        {method.type === "property" ? (
                                          <FaList className="mr-2" />
                                        ) : (
                                          <FaCog className="mr-2" />
                                        )}
                                        {method.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            )}
            <div className="flex-1 mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
                Vera Core API Reference
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                Explore the cutting-edge classes and methods powering the Vera
                Core .NET package.
              </p>

              {error && (
                <div className="text-red-500 text-center mb-8">{error}</div>
              )}

              {apiDocs.map((namespace, nsIndex) => (
                <div key={nsIndex} className="mb-16">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-semibold px-6 py-3 rounded-lg mb-6 shadow-md flex items-center">
                    <FaList className="mr-2" />
                    {namespace.name}
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mb-8"></div>
                  {namespace.classes.map((classDoc, classIndex) => (
                    <div
                      key={classIndex}
                      className="mb-8 bg-gradient-to-br from-white/60 to-indigo-100/60 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
                      id={`${namespace.name}-${classDoc.className}`}
                    >
                      <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                              <span className="text-purple-700 dark:text-purple-300">
                                class
                              </span>{" "}
                              <span className="break-words">
                                {classDoc.className}
                              </span>
                            </h2>
                            <p className="text-gray-800 dark:text-gray-200">
                              {classDoc.description}
                            </p>
                          </div>
                        </div>
                        <div className="border-t border-gray-400 dark:border-gray-600">
                          {classDoc.methods.map((method, methodIndex) => (
                            <div
                              key={methodIndex}
                              className="mt-4 bg-gradient-to-br from-white/60 to-indigo-100/60 dark:from-black/60 dark:to-indigo-900/60 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                              id={`${namespace.name}-${classDoc.className}-${method.name}`}
                            >
                              <div className="flex items-center mb-4">
                                <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mr-2">
                                  {method.name}
                                </h3>
                                {method.visibility === "public" && (
                                  <FaEye
                                    className="text-green-600"
                                    title="Public"
                                  />
                                )}
                                {method.visibility === "private" && (
                                  <FaEyeSlash
                                    className="text-red-600"
                                    title="Private"
                                  />
                                )}
                                {method.visibility === "protected" && (
                                  <FaLock
                                    className="text-yellow-600"
                                    title="Protected"
                                  />
                                )}
                                {method.type === "method" && (
                                  <FaCog
                                    className="text-blue-600 ml-2"
                                    title="Method"
                                  />
                                )}
                                {method.type === "field" && (
                                  <FaList
                                    className="text-orange-600 ml-2"
                                    title="Field"
                                  />
                                )}
                                {method.type === "enum" && (
                                  <FaCode
                                    className="text-purple-600 ml-2"
                                    title="Enum"
                                  />
                                )}
                                {method.type === "property" && (
                                  <FaList
                                    className="text-teal-600 ml-2"
                                    title="Property"
                                  />
                                )}
                              </div>
                              <p className="mb-6 text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
                                {method.description}
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
                                    Arguments
                                  </h4>
                                  <ul className="space-y-3 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
                                    {method.arguments.length === 0 ? (
                                      <li className="text-gray-800 dark:text-gray-200">
                                        (No Arguments)
                                      </li>
                                    ) : (
                                      method.arguments.map((arg, argIndex) => (
                                        <li
                                          key={argIndex}
                                          className="text-gray-800 dark:text-gray-200"
                                        >
                                          <strong className="text-purple-700 dark:text-purple-300">
                                            {arg.name}
                                          </strong>{" "}
                                          <span className="text-indigo-700 dark:text-indigo-300">
                                            ({arg.type})
                                          </span>
                                          : {arg.description}
                                        </li>
                                      ))
                                    )}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
                                    Returns
                                  </h4>
                                  <p className="text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600 p-4 rounded-lg bg-white dark:bg-gray-800">
                                    {method.returns}
                                  </p>
                                </div>
                              </div>
                              <h4 className="font-semibold mt-6 mb-3 text-indigo-700 dark:text-indigo-300">
                                Example
                              </h4>
                              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto border border-gray-300 dark:border-gray-700">
                                <code className="text-sm text-blue-700 dark:text-blue-300">
                                  {method.example}
                                </code>
                              </div>
                              <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
                                Source Code
                              </h4>
                              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto border border-gray-300 dark:border-gray-700">
                                <pre className="text-sm">
                                  <code className="text-blue-700 dark:text-blue-300">
                                    {method.sourceCode.trim()}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto mt-6">
            <Link href="/docs/core" legacyBehavior>
              <a className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-transform transform hover:scale-105 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Documentation
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VeraCoreApiReference;
