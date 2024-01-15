(function () {
	var html = '';
	html += '<a class="diy export" data-type="json">' + _lang_pack[_lang_default]['panels']['export'] + 'Json</a>',
		html += '<a class="diy export" data-type="md">' + _lang_pack[_lang_default]['panels']['export'] + 'MD</a>',
		html += '<a class="diy export" data-type="png">' + _lang_pack[_lang_default]['panels']['export'] + 'PNG</a>',
		//html += '<a class="diy export" data-type="svg">' + _lang_pack[_lang_default]['panels']['export'] + 'SVG</a>',
		html += '<button class="diy input">' + _lang_pack[_lang_default]['panels']['import'] + '<input type="file" id="fileImport"></button>';
	$('.editor-title').append(html);

	$('.diy').css({
		'margin-top': '0px',
		'float': 'left',
		'background-color': '#fff',
		'min-width': '62px',
		'text-decoration': 'none',
		'text-align': 'center',
		'color': '#666',
		'padding': '0 0 0 0',
		'border': 'none',
		'border-right': '1px solid #ccc',
		'border-top': '1px solid #ccc',
	});
	$('.diy').on('mouseover', function () {
		$(this).css('cursor', 'pointer');
	});
	$('#fileImport').on('mouseover', function () {
		$(this).css('cursor', 'pointer');
	});
	$('.input').css({
		'overflow': 'hidden',
		'position': 'relative',
	}).find('input').css({
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		display: 'inline-block',
		opacity: 0
	});

	//mouseover event load mindmap content as file to prepare for downloading
	$('.export').on('mouseover', function (event) {
		let $this = $(this),
			type = $this.data('type'),
			exportType, blob;
		$this.css('cursor', 'pointer');

		if (type === 'md')
			exportType = 'markdown';
		else
			exportType = type;

		editor.minder.exportData(exportType).then(function (content) {

			if (exportType === 'png') {
				//write mindmap data to PNG file
				let arr = content.split(','), mime = arr[0].match(/:(.*?);/)[1],
					bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
				while (n--) {
					u8arr[n] = bstr.charCodeAt(n);
				}
				blob = new Blob([u8arr], { type: mime });
			}
			else
				blob = new Blob([content], { type: 'application/' + type });

			let url = URL.createObjectURL(blob);
			let aLink = $this[0];
			aLink.href = url;
			aLink.download = $('#node_text1').text() + '.' + type;
		});
	});

	//read mindmap data from import json or md file
	$('#fileImport').on('change', function () {
		let file = fileImport.files[0],
			importType = file.name.substr(file.name.lastIndexOf('.') + 1);
		//console.log(file);
		if (importType === 'md')
			importType = 'markdown';
		else if (importType != 'json' && importType != 'markdown'){
			console.log("File not supported!");
			alert('Only .md .json file !');
			return ; 
		}
		let reader = new FileReader();
		reader.onload = function (e) {
			let content = reader.result;
			editor.minder.importData(importType, content).then(function (data) {
				//console.log(data);
				$(fileImport).val('');
			});
		}
		reader.readAsText(file);
	});

	window.onload = function () {
		// init loading mindmap diagram and the existed mindmap data or create new default mindmap json data
		let parent = window.parent.document.getElementById('mindmap_diagram_json');
		let data_json, maintopic = _lang_pack[_lang_default]['maintopic'];
		let init_data_json = `{"root":{"data":{"id":"cmhllt94xb40","created":1661683403686,"text":"${maintopic}"},"children":[{"data":{"id":"cybyhdvw3qg0","created":1704984272746,"text":"Topic1"},"children":[]},{"data":{"id":"cybyhfxtzd40","created":1704984277217,"text":"Topic2"},"children":[]},{"data":{"id":"cybyhhzf1ew0","created":1704984281667,"text":"Topic3"},"children":[]},{"data":{"id":"cybyhjs9st40","created":1704984285588,"text":"Topic4"},"children":[]}]},"template":"default","theme":"fresh-purple","version":"1.4.33"}`;

		if (parent != null && parent.value != "")
			data_json = parent.value;
		else
			data_json = init_data_json;
		//loading mindmap data in diagram
		editor.minder.importData('json', data_json).then(function (data) {
			//console.log(data);
			$(data_json).val('');
		});

		// set a timmer to sync mindmap data to parent diagram to save data per 1s
		setInterval(function () {
			editor.minder.exportData('json').then(function (jsoncontent) {
				//json and png data not to save until changing
				if (jsoncontent != init_data_json && parent.value != jsoncontent) {
					parent.value = jsoncontent;
					editor.minder.exportData('png').then(function (pngcontent) {
						let parent_png = window.parent.document.getElementById('mindmap_diagram_png');
						if (parent_png.value != pngcontent)
							parent_png.value = pngcontent;
					});
				}
			});

		}, 1000);

		// mousewheel scroll zoom in/out
		$(".minder-editor").on('mousewheel DOMMouseScroll', function (event) {
			if (event.ctrlKey == true) {
				event.preventDefault();
				if (event.originalEvent.wheelDelta > 0) {
					//console.log('Down');
					editor.minder.execCommand('zoomIn');
				} else {
					//console.log('Up');
					editor.minder.execCommand('zoomOut');
				}
			}
		});
	}
})();
