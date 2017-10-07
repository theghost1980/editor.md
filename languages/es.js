(function(){
    var factory = function (exports) {
        var lang = {
            name : "es",
            description : "Editor Markdown de Código Libre.",
            tocTitle    : "Tabla de Contenidos",
            toolbar : {
                undo             : "Deshacer(Ctrl+Z)",
                redo             : "Rehacer(Ctrl+Y)",
                bold             : "Negrillas",
                del              : "Tachado",
                italic           : "Crusiva",
                quote            : "Bloque Cita",
                ucwords          : "La primera letra de las palabras se convierte en mayúsculas",
                uppercase        : "El texto seleccionado se convierte en mayúsculas",
                lowercase        : "El texto seleccionado se convierte en minúsculas",
                h1               : "Encabezado 1",
                h2               : "Encabezado 2",
                h3               : "Encabezado 3",
                h4               : "Encabezado 4",
                h5               : "Encabezado 5",
                h6               : "Encabezado 6",
                "list-ul"        : "Lista no numerada",
                "list-ol"        : "Lista numerada",
                hr               : "Separador",
                link             : "Enlace",
                "reference-link" : "Enlace de Referencia",
                image            : "Imagen",
                code             : "Línea de Codigo",
                "preformatted-text" : "Texto preformateado / Bloque de código (con tabulación)",
                "code-block"     : "Bloque de código (Multi-idiomas)",
                table            : "Tablas",
                datetime         : "Fecha/Hora",
                emoji            : "Emoji",
                "html-entities"  : "Entidades HTML",
                pagebreak        : "Salto de Página",
                watch            : "Sin Supervision",
                unwatch          : "Supervisar",
                preview          : "Vista previa HTML (Presione Shift + ESC para salir)",
                fullscreen       : "Pantalla completa (ESC para salir)",
                clear            : "Borrar",
                search           : "Buscar",
                help             : "Ayuda",
                info             : "Acerca de " + exports.title
            },
            buttons : {
                enter  : "Enter",
                cancel : "Cancelar",
                close  : "Cerrar"
            },
            dialog : {
                link : {
                    title    : "Enlace",
                    url      : "Dirección",
                    urlTitle : "Título",
                    urlEmpty : "Error: Por favor coloque la direccion del enlace."
                },
                referenceLink : {
                    title    : "Enlace de referencia",
                    name     : "Nombre",
                    url      : "Dirección",
                    urlId    : "ID",
                    urlTitle : "Título",
                    nameEmpty: "Error: Nombre de referencia no puede ser vacio.",
                    idEmpty  : "Error: Favor coloque el identificador de enlace de referencia.",
                    urlEmpty : "Error: Favor coloque la dirección de referencia a la web."
                },
                image : {
                    title    : "Imagen",
                    url      : "Dirección",
                    link     : "Enlace",
                    alt      : "Título",
                    uploadButton     : "Cargar",
                    imageURLEmpty    : "Error: la direccion de la url no puede ser vacío.",
                    uploadFileEmpty  : "Error: la carga de fotos no puede estar vacía!",
                    formatNotAllowed : "Error: sólo permite subir archivos de imágenes, formato de archivo de imagen permitido:"
                },
                preformattedText : {
                    title             : "Texto preformateado / Códigos", 
                    emptyAlert        : "Error: Por favor, rellene el texto preformateado o el contenido de los códigos."
                },
                codeBlock : {
                    title             : "Bloque de código",         
                    selectLabel       : "Idiomas: ",
                    selectDefaultText : "seleccione un idioma de código ...",
                    otherLanguage     : "Otros idiomas",
                    unselectedLanguageAlert : "Error: Seleccione el idioma del código.",
                    codeEmptyAlert    : "Error: Por favor, complete el contenido del código."
                },
                htmlEntities : {
                    title : "Entidades HTML"
                },
                help : {
                    title : "Ayuda"
                }
            }
        };
        
        exports.defaults.lang = lang;
    };
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}
    
})();
