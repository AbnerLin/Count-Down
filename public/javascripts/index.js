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

		$("#right").scrollTop($("#right")[0].scrollHeight);

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
				addMsg($(this).val())
				$('#inputTag').val("");
				$('#inputTag').focus();
			}
		}
	});

	function zerofill(num) {
		return (num < 10 ? "0" : "") + num;
	}

	function addMsg(msg) {
		var date = new Date();
		var currentDate = date.getFullYear() + "-" + zerofill(date.getMonth() + 1) + "-" + zerofill(date.getDate()) + " " + zerofill(date.getHours()) + ":" + zerofill(date.getMinutes()); 
		$('#right').append("<div class=\"msg\"><p class=\"eachMessage\">" + msg + "</p><p class=\"time\">at " + currentDate + "</p></div>");
		
		$("#right").scrollTop($("#right")[0].scrollHeight);
	}
	
});
