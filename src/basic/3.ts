// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).
let unionType: string | number;
unionType = "str";
unionType = 1;

let literalType: "enable" | "disable";
literalType = "enable";
literalType = "disable";