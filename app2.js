// �ļ�չʾ mp4
;
function file_video(path){
	var url = window.location.origin + path;
	var content = `
<div class="mdui-container-fluid">
	<br>
	<video class="mdui-video-fluid mdui-center" preload controls>
	  <source src="${url}" type="video/mp4">
	</video>
	<br>
	<!-- �̶���ǩ -->
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">�����ص�ַ</label>
	  <input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
	$('#content').html(content);
};