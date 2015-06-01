$(function() {
	var socket = io();
	$(document).ready(function() {
		$('#countdown_dashboard').countDown({
        	        targetDate: {
	                        'day':          30,
                        	'month':        6,
                	        'year':         2015,
        	                'hour':         0,
	                        'min':          0,
                        	'sec':          0
                	},
                	omitWeeks: true,
                        onComplete: function() {
   				alert("畢業快樂");
			}
        	});

		socket.on('message', function(msg) {
			addMsg(msg);
		});

	});

	$('#inputTag').keydown(function(e) {
		if(e.keyCode == 13 && e.shiftKey) {
			e.preventDefault();
			var comment = $.trim($(this).val());
			if(comment.length > 0) {
				socket.emit('message', $(this).val());
				$('#inputTag').val("");
				$('#inputTag').focus();
			}
		}
	});

	function addMsg(msg) {
		//$()

	}
	
});
