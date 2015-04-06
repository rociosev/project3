  <script>
            var states = [];
            var kentucky = [];
            var georgia = [];
            var southCarolina = [];
            var northCarolina = [];
            var tennessee = [];
            var virginia = [];
         //   var html = "";
         
         
                
        $(document).ready(function(){
            console.log("ready");
            loadXML();
        });
    
    function loadXML2(){
          console.log("loadXML has begun!");
    //ajax call
    $.ajax({
    type:"GET",
    url: "breakfast-served.xml",
    dataType: "xml",
    success: parseXML2
    })
    }
    
    
    function parseXML2(xml){
    //loop through data
    console.log("hi");
     $(xml).find("ROW").each(function(){ //index
        console.log("loadXML has begun!");
                var $ROW = $(this);
                states.push($ROW.find("FIELD1").text());
                georgia.push(parseFloat(($ROW.find("FIELD2").text())));
                kentucky.push(parseFloat($ROW.find("FIELD3").text()));
                northCarolina.push(parseFloat($ROW.find("FIELD4").text()));
                southCarolina.push(parseFloat($ROW.find("FIELD5").text()));
                tennessee.push(parseFloat($ROW.find("FIELD6").text()));
                
    console.log(georgia)
    
                  buildchart();
                  })

    function buildchart(){
        console.log("buildChart is loaded");
    $('#chart2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
        
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: 'States',
                data: [
                    {
                        name: 'Georgia',
                        y: georgia[0],
                        sliced: false,
                        selected: false
                    },
                            {
                        name: 'Kentucky',
                        y: kentucky[0],
                        sliced: false,
                        selected: false
                    },
                    
                   
                          {
                        name: 'South Carolina',
                        y: southCarolina[0],
                        sliced: false,
                        selected: false
                    },
                     {
                        name: 'North Carolina',
                        y: northCarolina[0],
                        sliced: true,
                        selected: true
                    },
                      {
                        name: 'Tennessee',
                        y: tennessee[0],
                        sliced: false,
                        selected: false
                    },
                      
                ]
            }]
        });
    };
    };

    </script>