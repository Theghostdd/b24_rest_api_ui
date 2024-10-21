import './docs.css';
import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomOneDark, zenburn} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Accordion from "../accordion/accordion";

const Docs = () => {
    const exampleJson = `
{
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99
            }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    }
}
`;

    const accordionData = [
        { title: "$.store.book[*].author", content: (
                <>
                    <p>
                        The authors of all books in the store
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify(["Nigel Rees", "Evelyn Waugh", "Herman Melville", "J. R. R. Tolkien"], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..author", content: (
                <>
                    <p>
                        All authors
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify(["Nigel Rees", "Evelyn Waugh", "Herman Melville", "J. R. R. Tolkien"], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$.store.*", content: (
                <>
                    <p>
                        All things in store, which are some books and a red bicycle
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            [
                                {
                                    "category": "reference",
                                    "author": "Nigel Rees",
                                    "title": "Sayings of the Century",
                                    "price": 8.95
                                },
                                {
                                    "category": "fiction",
                                    "author": "Evelyn Waugh",
                                    "title": "Sword of Honour",
                                    "price": 12.99
                                },
                                {
                                    "category": "fiction",
                                    "author": "Herman Melville",
                                    "title": "Moby Dick",
                                    "isbn": "0-553-21311-3",
                                    "price": 8.99
                                },
                                {
                                    "category": "fiction",
                                    "author": "J. R. R. Tolkien",
                                    "title": "The Lord of the Rings",
                                    "isbn": "0-395-19395-8",
                                    "price": 22.99
                                }
                            ],
                            {
                                "color": "red",
                                "price": 19.95
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$.store..price", content: (
                <>
                    <p>
                        The price of everything in the store
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            8.95,
                            12.99,
                            8.99,
                            22.99,
                            19.95
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[2]", content: (
                <>
                    <p>
                        The third book
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "fiction",
                                "author": "Herman Melville",
                                "title": "Moby Dick",
                                "isbn": "0-553-21311-3",
                                "price": 8.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[(@.length-1)]", content: (
                <>
                    <p>
                        The last book via script subscript
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "fiction",
                                "author": "J. R. R. Tolkien",
                                "title": "The Lord of the Rings",
                                "isbn": "0-395-19395-8",
                                "price": 22.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[-1:]", content: (
                <>
                    <p>
                        The last book via slice
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "fiction",
                                "author": "J. R. R. Tolkien",
                                "title": "The Lord of the Rings",
                                "isbn": "0-395-19395-8",
                                "price": 22.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[0,1]", content: (
                <>
                    <p>
                        The first two books via subscript union
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "reference",
                                "author": "Nigel Rees",
                                "title": "Sayings of the Century",
                                "price": 8.95
                            },
                            {
                                "category": "fiction",
                                "author": "Evelyn Waugh",
                                "title": "Sword of Honour",
                                "price": 12.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[:2]", content: (
                <>
                    <p>
                        The first two books via subscript array slice
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "reference",
                                "author": "Nigel Rees",
                                "title": "Sayings of the Century",
                                "price": 8.95
                            },
                            {
                                "category": "fiction",
                                "author": "Evelyn Waugh",
                                "title": "Sword of Honour",
                                "price": 12.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[?(@.isbn)]", content: (
                <>
                    <p>
                        Filter all books with isbn number
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "fiction",
                                "author": "Herman Melville",
                                "title": "Moby Dick",
                                "isbn": "0-553-21311-3",
                                "price": 8.99
                            },
                            {
                                "category": "fiction",
                                "author": "J. R. R. Tolkien",
                                "title": "The Lord of the Rings",
                                "isbn": "0-395-19395-8",
                                "price": 22.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[?(@.price<10)]", content: (
                <>
                    <p>
                        Filter all books cheaper than 10
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "reference",
                                "author": "Nigel Rees",
                                "title": "Sayings of the Century",
                                "price": 8.95
                            },
                            {
                                "category": "fiction",
                                "author": "Herman Melville",
                                "title": "Moby Dick",
                                "isbn": "0-553-21311-3",
                                "price": 8.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[?(@.price==8.95)]", content: (
                <>
                    <p>
                        Filter all books that cost 8.95
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "reference",
                                "author": "Nigel Rees",
                                "title": "Sayings of the Century",
                                "price": 8.95
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..book[?(@.price<30 && @.category==\"fiction\")]", content: (
                <>
                    <p>
                        Filter all fiction books cheaper than 30
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "category": "fiction",
                                "author": "Evelyn Waugh",
                                "title": "Sword of Honour",
                                "price": 12.99
                            },
                            {
                                "category": "fiction",
                                "author": "Herman Melville",
                                "title": "Moby Dick",
                                "isbn": "0-553-21311-3",
                                "price": 8.99
                            },
                            {
                                "category": "fiction",
                                "author": "J. R. R. Tolkien",
                                "title": "The Lord of the Rings",
                                "isbn": "0-395-19395-8",
                                "price": 22.99
                            }
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
        {
            title: "$..*", content: (
                <>
                    <p>
                        All members of JSON structure
                    </p>
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {JSON.stringify([
                            {
                                "book": [
                                    {
                                        "category": "reference",
                                        "author": "Nigel Rees",
                                        "title": "Sayings of the Century",
                                        "price": 8.95
                                    },
                                    {
                                        "category": "fiction",
                                        "author": "Evelyn Waugh",
                                        "title": "Sword of Honour",
                                        "price": 12.99
                                    },
                                    {
                                        "category": "fiction",
                                        "author": "Herman Melville",
                                        "title": "Moby Dick",
                                        "isbn": "0-553-21311-3",
                                        "price": 8.99
                                    },
                                    {
                                        "category": "fiction",
                                        "author": "J. R. R. Tolkien",
                                        "title": "The Lord of the Rings",
                                        "isbn": "0-395-19395-8",
                                        "price": 22.99
                                    }
                                ],
                                "bicycle": {
                                    "color": "red",
                                    "price": 19.95
                                }
                            },
                            [
                                {
                                    "category": "reference",
                                    "author": "Nigel Rees",
                                    "title": "Sayings of the Century",
                                    "price": 8.95
                                },
                                {
                                    "category": "fiction",
                                    "author": "Evelyn Waugh",
                                    "title": "Sword of Honour",
                                    "price": 12.99
                                },
                                {
                                    "category": "fiction",
                                    "author": "Herman Melville",
                                    "title": "Moby Dick",
                                    "isbn": "0-553-21311-3",
                                    "price": 8.99
                                },
                                {
                                    "category": "fiction",
                                    "author": "J. R. R. Tolkien",
                                    "title": "The Lord of the Rings",
                                    "isbn": "0-395-19395-8",
                                    "price": 22.99
                                }
                            ],
                            {
                                "color": "red",
                                "price": 19.95
                            },
                            {
                                "category": "reference",
                                "author": "Nigel Rees",
                                "title": "Sayings of the Century",
                                "price": 8.95
                            },
                            {
                                "category": "fiction",
                                "author": "Evelyn Waugh",
                                "title": "Sword of Honour",
                                "price": 12.99
                            },
                            {
                                "category": "fiction",
                                "author": "Herman Melville",
                                "title": "Moby Dick",
                                "isbn": "0-553-21311-3",
                                "price": 8.99
                            },
                            {
                                "category": "fiction",
                                "author": "J. R. R. Tolkien",
                                "title": "The Lord of the Rings",
                                "isbn": "0-395-19395-8",
                                "price": 22.99
                            },
                            "reference",
                            "Nigel Rees",
                            "Sayings of the Century",
                            8.95,
                            "fiction",
                            "Evelyn Waugh",
                            "Sword of Honour",
                            12.99,
                            "fiction",
                            "Herman Melville",
                            "Moby Dick",
                            "0-553-21311-3",
                            8.99,
                            "fiction",
                            "J. R. R. Tolkien",
                            "The Lord of the Rings",
                            "0-395-19395-8",
                            22.99,
                            "red",
                            19.95
                        ], null, 2)}
                    </SyntaxHighlighter>
                </>
            )
        },
    ]

    const tablePath = (
        <table>
            <thead>
            <tr>
                <th>JSONPath</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>$</td>
                <td>The root object/element</td>
            </tr>
            <tr>
                <td>@</td>
                <td>The current object/element</td>
            </tr>
            <tr>
                <td>.</td>
                <td>Child member operator</td>
            </tr>
            <tr>
                <td>..</td>
                <td>Recursive descendant operator; JSONPath borrows this syntax from E4X</td>
            </tr>
            <tr>
                <td>[]</td>
                <td>Subscript operator</td>
            </tr>
            <tr>
                <td>[,]</td>
                <td>Union operator for alternate names or array indices as a set</td>
            </tr>
            <tr>
                <td>*</td>
                <td>Wildcard matching all objects/elements regardless their names</td>
            </tr>
            <tr>
                <td>[start:end:step]</td>
                <td>Array slice operator borrowed from ES4 / Python</td>
            </tr>
            <tr>
                <td>?()</td>
                <td>Applies a filter (script) expression via static evaluation</td>
            </tr>
            <tr>
                <td>()</td>
                <td>Script expression via static evaluation</td>
            </tr>
            </tbody>
        </table>
    )
    return (
        <div className="docs-container">
            <label>JSONPath Syntax</label>
            <div className="docs-children-container inside">
                {tablePath}
            </div>
            <div className="docs-children-container inside">
                <p>
                    <span>JSONPath expressions</span> always refer to a JSON structure in the same way as <span>XPath expressions</span> are
                    used in combination with an XML document.
                    Since a JSON structure is usually anonymous and doesn't necessarily have a <span>"root member object"</span>,
                    JSONPath assumes the abstract name <span>$</span> assigned to the outer level object.
                </p>

                <p>
                    JSONPath expressions can use the <span>dot–notation</span> or the <span>bracket–notation</span>.
                    <SyntaxHighlighter language="json" style={atomOneDark}>
                        $.store.book[0].title
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="json" style={atomOneDark}>
                        $['store']['book'][0]['title']
                    </SyntaxHighlighter>
                </p>
                <p>
                    Internal or output paths will always be converted to the more
                    general <span>bracket–notation</span>.
                    JSONPath allows the wildcard symbol <span>*</span> for member names and array indices.
                    It borrows the descendant operator <span>..</span> from <span>E4X</span> and the array slice syntax
                    proposal <span>[start:end:step]</span> from <span>ECMAScript 4</span>.
                </p>

                <p>
                    Expressions of the underlying scripting language can be used as an alternative to explicit
                    names or indices as in using the symbol <span>@</span> for the current object.
                    <SyntaxHighlighter language="json" style={atomOneDark}>
                        $.store.book[(@.length-1)].title
                    </SyntaxHighlighter>
                    Filter expressions are supported via the syntax as in
                    <SyntaxHighlighter language="json" style={atomOneDark}>
                        $.store.book[?(@.price &lt; 10)].title
                    </SyntaxHighlighter>
                </p>

            </div>

            <label>Example</label>
            <div className="docs-children-container inside">
                <p>
                    Given this sample data set, see example expressions below:
                    <SyntaxHighlighter language="json" style={zenburn}>
                        {exampleJson}
                    </SyntaxHighlighter>
                </p>
            </div>
            <label>Example JSONPath expressions:</label>
            <div className="docs-children-container inside">
                <Accordion data={accordionData}/>
                <p id={"jsonPathExamples"}>You can use <a href={'https://jsonpath.com/'} target="_blank" rel="noopener noreferrer">this</a> for a visual demonstration.
                </p>
            </div>
        </div>
    )
}

export default Docs;