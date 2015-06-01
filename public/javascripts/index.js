$(function() {
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

	});

	
});
