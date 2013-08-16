/// <reference path="jquery.d.ts" />

export class CellOptions
{
	asHeader : boolean;
}

export class Table {
    __domElement: JQuery;
    __currentTable: JQuery;
    __currentRow: JQuery;
    __isHeaderRow: boolean;

    constructor(domElement: JQuery) {
        this.__domElement = domElement;
        this.__currentTable = $("<table></table>");
        this.__domElement.append(this.__currentTable);
    }

    addRow() {
        this.__isHeaderRow = false;

        this.__currentRow = $("<tr></tr>");
        this.__currentTable.append(this.__currentRow);

        return this.__currentRow;
    }

    addHeaderRow() {
        this.__isHeaderRow = true;

        this.__currentRow = $("<tr></tr>");
        this.__currentTable.append(this.__currentRow);

        return this.__currentRow;
    }

    addColumn(content: string);
    addColumn(content: string, options?: CellOptions) {
        var currentColumn = this.__createColumn(options);
        currentColumn.text(content);

        return currentColumn;
    }

    addColumnHtml(content: string);
    addColumnHtml(content: string, options?: CellOptions) {
        var currentColumn = this.__createColumn(options);
        currentColumn.html(content);

        return currentColumn;
    }

    __createColumn(options) {
        if (this.__currentRow === undefined) {
            throw ("Row has not been started");
        }

        if (options == undefined) {
            options = {};
        }

        var currentColumn;

        if (this.__isHeaderRow || options.asHeader === true) {
            currentColumn = $("<th></th>");
        }
        else {
            currentColumn = $("<td></td>");
        }

        this.__currentRow.append(currentColumn);

        return currentColumn;
    }
}
