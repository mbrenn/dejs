define([],
    function () {
        var tableClass = function (domElement) {
            this.__domElement = domElement;
            this.__currentRow = undefined;
            this.__isHeaderRow = false;
        };

        tableClass.prototype =
            {
                addRow: function () {
                    // TODO: Start new row with td
                },

                addHeaderRow: function()
                {
                    // TODO: Start new row with th
                },

                addColumn: function (content, options) {
                    // TODO: Add new Column
                }
            };
    }
    );