"use strict";


     // PAGE ANIMATION
		
		var ascensor = $('#ascensorBuilding').ascensor({
				height: "100%",
				ascensorFloorName:["about", "contact"], direction: [[0,1],[0,2]]});
			var ascensorInstance = $('#ascensorBuilding').data('ascensor');
			var floorAdded = false;
				
			$(".links-to-floor li").on("click", function(event, index) {
				ascensorInstance.scrollToFloor($(this).index());
			});

			$(".links-to-floor li a:eq("+ ascensor.data("current-floor") +")").addClass("selected");

			ascensor.on("scrollStart", function(event, floor){
				$(".links-to-floor li a").removeClass("selected");
				$(".links-to-floor li a:eq("+floor.to+")").addClass("selected");
			});

			$(".prev").on("click", function() {
				ascensorInstance.prev();
			});
				
			$(".next").on("click", function() {
				ascensorInstance.next();
			});
				
			$(".direction").on("click", function() {
				ascensorInstance.scrollToDirection($(this).data("direction"));
			});	
    



