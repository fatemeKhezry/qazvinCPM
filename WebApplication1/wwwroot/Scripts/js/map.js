var infowindow = null;
    $(document).ready(function () { initialize();  });

    function initialize() {

         var centerMap = new google.maps.LatLng(36.2812202, 50.0166858);
        var myOptions = {
            zoom: 12,
            center: centerMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-29"
            },
            {
                "lightness": "3"
            },
            {
                "gamma": "0.40"
            },
            {
                "hue": "#00adff"
            },
            {
                "weight": "0.95"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": 0.5
            },
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "gamma": 1
            },
            {
                "saturation": 50
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": 50
            },
            {
                "hue": "#50a5d1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e4f1f8"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        setMarkers(map, sites);
	    infowindow = new google.maps.InfoWindow({
                content: "loading...",
				
            });

        var bikeLayer = new google.maps.BicyclingLayer();
		bikeLayer.setMap(map);
    }

    var sites = [
	['Mount Evans', 36.3113471,49.9939567, 4, 'پروژه عمرانی پل فلسطین','اقای پورشیخ','امیر محمد دینی','اقای مرتضوی','72.000.000.000 ریال ','4 ماه','1.html'],
	['Irving Homestead', 36.324936, 50.064236, 2, 'پروژه عمرانی پل فلسطین','اقای پورشیخ','امیر محمد دینی','اقای مرتضوی','72.000.000.000 ریال ','5 ماه','2.html'],
	['Irving Homestead', 36.2923326,49.9311447, 2, 'پروژه عمرانی پل فلسطین','اقای پورشیخ','امیر محمد دینی','اقای مرتضوی','72.000.000.000 ریال ','6 ماه','3.html'],
	['Badlands National Park', 36.2644821,50.0314792, 1, 'پروژه عمرانی پل فلسطین','اقای پورشیخ','امیر محمد دینی','اقای مرتضوی','72.000.000.000 ریال ','7 ماه','4.html'],
	['Flatirons in the Spring', 36.300082,50.0098408, 3, 'پروژه عمرانی پل فلسطین','اقای پورشیخ','امیر محمد دینی','اقای مرتضوی','72.000.000.000 ریال ','8 ماه','5.html']
];




    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites[0],
                zIndex: sites[3],
				icon:"http://up.vbiran.ir/uploads/13629149802536910810_work.png",
                pro1: sites[4],
                pro2: sites[5],
                pro3: sites[6],
                pro4: sites[7],
                pro5: sites[8],
                pro6: sites[9],
                pro7: "pagebox.html"
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
			$("#modal-container.two").css({"display": "inline-table"});
			$("#close").click(function(){
    $("#modal-container.two").css({"display": "none"});
});

document.getElementById("pro").innerHTML = this.pro1
document.getElementById("pro2").innerHTML = this.pro2
document.getElementById("pro3").innerHTML = this.pro3
document.getElementById("pro4").innerHTML = this.pro4
document.getElementById("pro5").innerHTML = this.pro5
document.getElementById("pro6").innerHTML = this.pro6
document.getElementById("pro7").href=this.pro7;
            });
        }
    }