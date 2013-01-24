
requirejs.config(
{
    //By default load any module IDs from js/lib
    baseUrl: 'js/',
});

define([],
    function () {
        // First load
        require(['dejs.table.js'],
            function (tableClass) {
                alert('JO');
            }
        );
    }
);
