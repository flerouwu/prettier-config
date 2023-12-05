/** @type {import("prettier").Config} */
export default {
    /**
     * This is not the upper limit of a line's length.
     * Prettier goes over/under this limit. It's simply
     * a general length that Prettier will try to meet.
     *
     * @link https://prettier.io/docs/en/options#print-width
     */
    printWidth: 80,

    useTabs: false, // Use spaces instead of tabs.
    tabWidth: 4, // Indent width of 4 spaces.
    semi: false, // Remove semi-colons.

    singleQuote: false, // Don't use single quotes. JSX ignores this.
    jsxSingleQuote: false, // Don't use single quote in JSX.
    quoteProps: "consistent", // If one property requires quotes, quote all properties.

    trailingComma: "all", // Trailing commas wherever possible (requires ES2017+ or Node 8+).
    bracketSpacing: true, // Print spaces between brackets in object literals.
    bracketSameLine: true, // Place the `>` of a multi-line HTML element at the end of the last line.

    arrowParens: "always", // Include parantheses around a sole arrow function parameter.
    requirePragma: false, // Don't require @format or @prettier at top of file.
    insertPragma: false, // Don't insert @format at top of file.

    proseWrap: "preserve", // Do not change prose in Markdown.
    htmlWhitespaceSensitivity: "css", // Respect value of CSS `display` property (whitespace on inline elements).
    vueIndentScriptAndStyle: false, // Don't indent the code in <script> and <style> tags in Vue files.

    endOfLine: "lf", // Force line ending to Unix (LF) endings.
    embeddedLanguageFormatting: "auto", // Format embedded code (e.g. tagged template in JS or Markdown codeblocks).
    singleAttributePerLine: false, // Do not force each attribute in HTML to be on a new line.
}
