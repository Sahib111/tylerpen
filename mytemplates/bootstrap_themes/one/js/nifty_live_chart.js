var chartInterval;
var intradayChart = '';
var spotChartInterval;
var optionChartInterval;
var futureChartInterval;
var futureIntraDayCHart;
var spotPriceElement = '';
var stickyPriceElement = '';
var optionPriceElement = '';
var futurePriceElement = '';

$(document).ready(function(){
graphload()
spotPriceElement = $("#sp_val");
spotPriceElement.numberAnimate({
animationTimes: [10, 0, 10]
});
});

function graphload(){
$( "#spotIntraDayChart" ).html('');
var container = document.createElement('div');
$( "#spotIntraDayChart" ).append( container );
//console.log("i m in function"); 
var data = [{"time":1633338960},{"time":1633339020},{"time":1633339080},{"time":1633339140},{"time":1633339200},{"time":1633339260},{"time":1633339320},{"time":1633339380},{"time":1633339440},{"time":1633339500},{"time":1633339560},{"time":1633339620},{"time":1633339680},{"time":1633339740},{"time":1633339800},{"time":1633339860},{"time":1633339920},{"time":1633339980},{"time":1633340040},{"time":1633340100},{"time":1633340160},{"time":1633340220},{"time":1633340280},{"time":1633340340},{"time":1633340400},{"time":1633340460},{"time":1633340520},{"time":1633340580},{"time":1633340640},{"time":1633340700},{"time":1633340760},{"time":1633340820},{"time":1633340880},{"time":1633340940},{"time":1633341000},{"time":1633341060},{"time":1633341120},{"time":1633341180},{"time":1633341240},{"time":1633341300},{"time":1633341360},{"time":1633341420},{"time":1633341480},{"time":1633341540},{"time":1633341600},{"time":1633341660},{"time":1633341720},{"time":1633341780},{"time":1633341840},{"time":1633341900},{"time":1633341960},{"time":1633342020},{"time":1633342080},{"time":1633342140},{"time":1633342200},{"time":1633342260},{"time":1633342320},{"time":1633342380},{"time":1633342440},{"time":1633342500},{"time":1633342560},{"time":1633342620},{"time":1633342680},{"time":1633342740},{"time":1633342800},{"time":1633342860},{"time":1633342920},{"time":1633342980},{"time":1633343040},{"time":1633343100},{"time":1633343160},{"time":1633343220},{"time":1633343280},{"time":1633343340},{"time":1633343400},{"time":1633343460},{"time":1633343520},{"time":1633343580},{"time":1633343640},{"time":1633343700},{"time":1633343760},{"time":1633343820},{"time":1633343880},{"time":1633343940},{"time":1633344000},{"time":1633344060},{"time":1633344120},{"time":1633344180},{"time":1633344240},{"time":1633344300},{"time":1633344360},{"time":1633344420},{"time":1633344480},{"time":1633344540},{"time":1633344600},{"time":1633344660},{"time":1633344720},{"time":1633344780},{"time":1633344840},{"time":1633344900},{"time":1633344960},{"time":1633345020},{"time":1633345080},{"time":1633345140},{"time":1633345200},{"time":1633345260},{"time":1633345320},{"time":1633345380},{"time":1633345440},{"time":1633345500},{"time":1633345560},{"time":1633345620},{"time":1633345680},{"time":1633345740},{"time":1633345800},{"time":1633345860},{"time":1633345920},{"time":1633345980},{"time":1633346040},{"time":1633346100},{"time":1633346160},{"time":1633346220},{"time":1633346280},{"time":1633346340},{"time":1633346400},{"time":1633346460},{"time":1633346520},{"time":1633346580},{"time":1633346640},{"time":1633346700},{"time":1633346760},{"time":1633346820},{"time":1633346880},{"time":1633346940},{"time":1633347000},{"time":1633347060},{"time":1633347120},{"time":1633347180},{"time":1633347240},{"time":1633347300},{"time":1633347360},{"time":1633347420},{"time":1633347480},{"time":1633347540},{"time":1633347600},{"time":1633347660},{"time":1633347720},{"time":1633347780},{"time":1633347840},{"time":1633347900},{"time":1633347960},{"time":1633348020},{"time":1633348080},{"time":1633348140},{"time":1633348200},{"time":1633348260},{"time":1633348320},{"time":1633348380},{"time":1633348440},{"time":1633348500},{"time":1633348560},{"time":1633348620},{"time":1633348680},{"time":1633348740},{"time":1633348800},{"time":1633348860},{"time":1633348920},{"time":1633348980},{"time":1633349040},{"time":1633349100},{"time":1633349160},{"time":1633349220},{"time":1633349280},{"time":1633349340},{"time":1633349400},{"time":1633349460},{"time":1633349520},{"time":1633349580},{"time":1633349640},{"time":1633349700},{"time":1633349760},{"time":1633349820},{"time":1633349880},{"time":1633349940},{"time":1633350000},{"time":1633350060},{"time":1633350120},{"time":1633350180},{"time":1633350240},{"time":1633350300},{"time":1633350360},{"time":1633350420},{"time":1633350480},{"time":1633350540},{"time":1633350600},{"time":1633350660},{"time":1633350720},{"time":1633350780},{"time":1633350840},{"time":1633350900},{"time":1633350960},{"time":1633351020},{"time":1633351080},{"time":1633351140},{"time":1633351200},{"time":1633351260},{"time":1633351320},{"time":1633351380},{"time":1633351440},{"time":1633351500},{"time":1633351560},{"time":1633351620},{"time":1633351680},{"time":1633351740},{"time":1633351800},{"time":1633351860},{"time":1633351920},{"time":1633351980},{"time":1633352040},{"time":1633352100},{"time":1633352160},{"time":1633352220},{"time":1633352280},{"time":1633352340},{"time":1633352400},{"time":1633352460},{"time":1633352520},{"time":1633352580},{"time":1633352640},{"time":1633352700},{"time":1633352760},{"time":1633352820},{"time":1633352880},{"time":1633352940},{"time":1633353000},{"time":1633353060},{"time":1633353120},{"time":1633353180},{"time":1633353240},{"time":1633353300},{"time":1633353360},{"time":1633353420},{"time":1633353480},{"time":1633353540},{"time":1633353600},{"time":1633353660},{"time":1633353720},{"time":1633353780},{"time":1633353840},{"time":1633353900},{"time":1633353960},{"time":1633354020},{"time":1633354080},{"time":1633354140},{"time":1633354200},{"time":1633354260},{"time":1633354320},{"time":1633354380},{"time":1633354440},{"time":1633354500},{"time":1633354560},{"time":1633354620},{"time":1633354680},{"time":1633354740},{"time":1633354800},{"time":1633354860},{"time":1633354920},{"time":1633354980},{"time":1633355040},{"time":1633355100},{"time":1633355160},{"time":1633355220},{"time":1633355280},{"time":1633355340},{"time":1633355400},{"time":1633355460},{"time":1633355520},{"time":1633355580},{"time":1633355640},{"time":1633355700},{"time":1633355760},{"time":1633355820},{"time":1633355880},{"time":1633355940},{"time":1633356000},{"time":1633356060},{"time":1633356120},{"time":1633356180},{"time":1633356240},{"time":1633356300},{"time":1633356360},{"time":1633356420},{"time":1633356480},{"time":1633356540},{"time":1633356600},{"time":1633356660},{"time":1633356720},{"time":1633356780},{"time":1633356840},{"time":1633356900},{"time":1633356960},{"time":1633357020},{"time":1633357080},{"time":1633357140},{"time":1633357200},{"time":1633357260},{"time":1633357320},{"time":1633357380},{"time":1633357440},{"time":1633357500},{"time":1633357560},{"time":1633357620},{"time":1633357680},{"time":1633357740},{"time":1633357800},{"time":1633357860},{"time":1633357920},{"time":1633357980},{"time":1633358040},{"time":1633358100},{"time":1633358160},{"time":1633358220},{"time":1633358280},{"time":1633358340},{"time":1633358400},{"time":1633358460},{"time":1633358520},{"time":1633358580},{"time":1633358640},{"time":1633358700},{"time":1633358760},{"time":1633358820},{"time":1633358880},{"time":1633358940},{"time":1633359000},{"time":1633359060},{"time":1633359120},{"time":1633359180},{"time":1633359240},{"time":1633359300},{"time":1633359360},{"time":1633359420},{"time":1633359480},{"time":1633359540},{"time":1633359600},{"time":1633359660},{"time":1633359720},{"time":1633359780},{"time":1633359840},{"time":1633359900},{"time":1633359960},{"time":1633360020},{"time":1633360080},{"time":1633360140},{"time":1633360200},{"time":1633360260},{"time":1633360320},{"time":1633360380},{"time":1633360440},{"time":1633360500},{"time":1633360560},{"time":1633360620},{"time":1633360680},{"time":1633360740},{"time":1633360800},{"time":1633360860},{"time":1633360920},{"time":1633360980},{"time":1633361040},{"time":1633361100},{"time":1633361160},{"time":1633361220},{"time":1633361280},{"time":1633361340},{"time":1633361400},{"time":1633361460}];
var actualData = [{"time":1633338900,"value":17615.35},{"time":1633338960,"value":17628.55},{"time":1633339020,"value":17630.5},{"time":1633339080,"value":17626.75},{"time":1633339140,"value":17629.85},{"time":1633339200,"value":17631.6},{"time":1633339260,"value":17631.4},{"time":1633339320,"value":17635.3},{"time":1633339380,"value":17632.7},{"time":1633339440,"value":17626.45},{"time":1633339500,"value":17628.8},{"time":1633339560,"value":17625.05},{"time":1633339620,"value":17626.75},{"time":1633339680,"value":17621.7},{"time":1633339740,"value":17619.95},{"time":1633339800,"value":17623.4},{"time":1633339860,"value":17630.8},{"time":1633339920,"value":17634.95},{"time":1633339980,"value":17640.4},{"time":1633340040,"value":17637.45},{"time":1633340100,"value":17639.75},{"time":1633340160,"value":17645.25},{"time":1633340220,"value":17644.75},{"time":1633340280,"value":17645.85},{"time":1633340340,"value":17653},{"time":1633340400,"value":17650.9},{"time":1633340460,"value":17652.15},{"time":1633340520,"value":17653.85},{"time":1633340580,"value":17657.05},{"time":1633340640,"value":17652.5},{"time":1633340700,"value":17661.6},{"time":1633340760,"value":17657.35},{"time":1633340820,"value":17665.7},{"time":1633340880,"value":17677.45},{"time":1633340940,"value":17671.4},{"time":1633341000,"value":17679.05},{"time":1633341060,"value":17675.35},{"time":1633341120,"value":17679.65},{"time":1633341180,"value":17678.4},{"time":1633341240,"value":17681.6},{"time":1633341300,"value":17687.75},{"time":1633341360,"value":17684.45},{"time":1633341420,"value":17700.05},{"time":1633341480,"value":17704.7},{"time":1633341540,"value":17705.4},{"time":1633341600,"value":17710.1},{"time":1633341660,"value":17712.2},{"time":1633341720,"value":17708.85},{"time":1633341780,"value":17701.35},{"time":1633341840,"value":17696.4},{"time":1633341900,"value":17717.15},{"time":1633341960,"value":17712.85},{"time":1633342020,"value":17715.45},{"time":1633342080,"value":17710.4},{"time":1633342140,"value":17713.9},{"time":1633342200,"value":17713.15},{"time":1633342260,"value":17714.5},{"time":1633342320,"value":17717.1},{"time":1633342380,"value":17711},{"time":1633342440,"value":17711.8},{"time":1633342500,"value":17714.3},{"time":1633342560,"value":17720.65},{"time":1633342620,"value":17716.85},{"time":1633342680,"value":17714.85},{"time":1633342740,"value":17713.65},{"time":1633342800,"value":17706.7},{"time":1633342860,"value":17724.7},{"time":1633342920,"value":17724.5},{"time":1633342980,"value":17722.65},{"time":1633343040,"value":17724.85},{"time":1633343100,"value":17724.65},{"time":1633343160,"value":17728.55},{"time":1633343220,"value":17725.95},{"time":1633343280,"value":17727},{"time":1633343340,"value":17724},{"time":1633343400,"value":17722.3},{"time":1633343460,"value":17731.4},{"time":1633343520,"value":17730.9},{"time":1633343580,"value":17727.35},{"time":1633343640,"value":17725.05},{"time":1633343700,"value":17720.1},{"time":1633343760,"value":17719.45},{"time":1633343820,"value":17715},{"time":1633343880,"value":17712.65},{"time":1633343940,"value":17727.15},{"time":1633344000,"value":17736.35},{"time":1633344060,"value":17732.1},{"time":1633344120,"value":17729.65},{"time":1633344180,"value":17735},{"time":1633344240,"value":17736.7},{"time":1633344300,"value":17740.9},{"time":1633344360,"value":17738.9},{"time":1633344420,"value":17738.55},{"time":1633344480,"value":17742.3},{"time":1633344540,"value":17742.2},{"time":1633344600,"value":17733},{"time":1633344660,"value":17744},{"time":1633344720,"value":17744.05},{"time":1633344780,"value":17742.35},{"time":1633344840,"value":17740.15},{"time":1633344900,"value":17740.8},{"time":1633344960,"value":17740.2},{"time":1633345020,"value":17744.25},{"time":1633345080,"value":17744.75},{"time":1633345140,"value":17746.6},{"time":1633345200,"value":17742.45},{"time":1633345260,"value":17742},{"time":1633345320,"value":17740.85},{"time":1633345380,"value":17737.6},{"time":1633345440,"value":17733.3},{"time":1633345500,"value":17732.35},{"time":1633345560,"value":17729.15},{"time":1633345620,"value":17732.05},{"time":1633345680,"value":17732.9},{"time":1633345740,"value":17734.45},{"time":1633345800,"value":17731.45},{"time":1633345860,"value":17728.95},{"time":1633345920,"value":17723.25},{"time":1633345980,"value":17727.45},{"time":1633346040,"value":17726.2},{"time":1633346100,"value":17725.85},{"time":1633346160,"value":17728},{"time":1633346220,"value":17723.65},{"time":1633346280,"value":17718.3},{"time":1633346340,"value":17718.95},{"time":1633346400,"value":17724.4},{"time":1633346460,"value":17730.95},{"time":1633346520,"value":17724.4},{"time":1633346580,"value":17720.65},{"time":1633346640,"value":17720.1},{"time":1633346700,"value":17720.45},{"time":1633346760,"value":17717.15},{"time":1633346820,"value":17715.9},{"time":1633346880,"value":17715.8},{"time":1633346940,"value":17713.45},{"time":1633347000,"value":17712.55},{"time":1633347060,"value":17706.45},{"time":1633347120,"value":17710.3},{"time":1633347180,"value":17705.45},{"time":1633347240,"value":17704.85},{"time":1633347300,"value":17706.6},{"time":1633347360,"value":17703.25},{"time":1633347420,"value":17706.45},{"time":1633347480,"value":17704.25},{"time":1633347540,"value":17701.15},{"time":1633347600,"value":17697.65},{"time":1633347660,"value":17694.9},{"time":1633347720,"value":17695.05},{"time":1633347780,"value":17698.65},{"time":1633347840,"value":17692.45},{"time":1633347900,"value":17686.1},{"time":1633347960,"value":17690.05},{"time":1633348020,"value":17687.3},{"time":1633348080,"value":17687.2},{"time":1633348140,"value":17691.75},{"time":1633348200,"value":17700.75},{"time":1633348260,"value":17698.5},{"time":1633348320,"value":17702.6},{"time":1633348380,"value":17702.7},{"time":1633348440,"value":17703.45},{"time":1633348500,"value":17705.2},{"time":1633348560,"value":17709.85},{"time":1633348620,"value":17704.65},{"time":1633348680,"value":17703.95},{"time":1633348740,"value":17700.85},{"time":1633348800,"value":17701.15},{"time":1633348860,"value":17706.25},{"time":1633348920,"value":17703},{"time":1633348980,"value":17703.25},{"time":1633349040,"value":17704.3},{"time":1633349100,"value":17705.05},{"time":1633349160,"value":17703.6},{"time":1633349220,"value":17704.8},{"time":1633349280,"value":17702.55},{"time":1633349340,"value":17695.15},{"time":1633349400,"value":17687.15},{"time":1633349460,"value":17688.55},{"time":1633349520,"value":17695.8},{"time":1633349580,"value":17694.7},{"time":1633349640,"value":17694.4},{"time":1633349700,"value":17693.55},{"time":1633349760,"value":17683.25},{"time":1633349820,"value":17676.5},{"time":1633349880,"value":17681.25},{"time":1633349940,"value":17676.7},{"time":1633350000,"value":17668.9},{"time":1633350060,"value":17676.1},{"time":1633350120,"value":17676.85},{"time":1633350180,"value":17669.2},{"time":1633350240,"value":17659.05},{"time":1633350300,"value":17658.8},{"time":1633350360,"value":17656.55},{"time":1633350420,"value":17664.05},{"time":1633350480,"value":17664.35},{"time":1633350540,"value":17659.5},{"time":1633350600,"value":17650.25},{"time":1633350660,"value":17650.25},{"time":1633350720,"value":17651.7},{"time":1633350780,"value":17658.9},{"time":1633350840,"value":17660.9},{"time":1633350900,"value":17667.45},{"time":1633350960,"value":17668.85},{"time":1633351020,"value":17672.95},{"time":1633351080,"value":17670.1},{"time":1633351140,"value":17674.4},{"time":1633351200,"value":17676.9},{"time":1633351260,"value":17677.6},{"time":1633351320,"value":17676.85},{"time":1633351380,"value":17678.75},{"time":1633351440,"value":17679.75},{"time":1633351500,"value":17675.5},{"time":1633351560,"value":17675.2},{"time":1633351620,"value":17673.6},{"time":1633351680,"value":17673.05},{"time":1633351740,"value":17673.9},{"time":1633351800,"value":17676.2},{"time":1633351860,"value":17677.95},{"time":1633351920,"value":17677.2},{"time":1633351980,"value":17672.75},{"time":1633352040,"value":17669.55},{"time":1633352100,"value":17667.65},{"time":1633352160,"value":17670.1},{"time":1633352220,"value":17666.85},{"time":1633352280,"value":17669.85},{"time":1633352340,"value":17670.55},{"time":1633352400,"value":17665.95},{"time":1633352460,"value":17659.9},{"time":1633352520,"value":17665.75},{"time":1633352580,"value":17665.9},{"time":1633352640,"value":17665.6},{"time":1633352700,"value":17666.9},{"time":1633352760,"value":17670.35},{"time":1633352820,"value":17675.55},{"time":1633352880,"value":17673.3},{"time":1633352940,"value":17672.15},{"time":1633353000,"value":17668.9},{"time":1633353060,"value":17670.8},{"time":1633353120,"value":17672.15},{"time":1633353180,"value":17671.5},{"time":1633353240,"value":17675.6},{"time":1633353300,"value":17675.6},{"time":1633353360,"value":17685.1},{"time":1633353420,"value":17687.6},{"time":1633353480,"value":17688.75},{"time":1633353540,"value":17684.25},{"time":1633353600,"value":17684.1},{"time":1633353660,"value":17685},{"time":1633353720,"value":17684.9},{"time":1633353780,"value":17686.7},{"time":1633353840,"value":17689.85},{"time":1633353900,"value":17687},{"time":1633353960,"value":17691.15},{"time":1633354020,"value":17695.2},{"time":1633354080,"value":17693.75},{"time":1633354140,"value":17696},{"time":1633354200,"value":17700.8},{"time":1633354260,"value":17701.65},{"time":1633354320,"value":17700.65},{"time":1633354380,"value":17699.45},{"time":1633354440,"value":17698.65},{"time":1633354500,"value":17705.5},{"time":1633354560,"value":17707.3},{"time":1633354620,"value":17708.9},{"time":1633354680,"value":17704.05},{"time":1633354740,"value":17705.3},{"time":1633354800,"value":17714.25},{"time":1633354860,"value":17710.05},{"time":1633354920,"value":17706.6},{"time":1633354980,"value":17706.05},{"time":1633355040,"value":17706.3},{"time":1633355100,"value":17699.95},{"time":1633355160,"value":17702.3},{"time":1633355220,"value":17703.3},{"time":1633355280,"value":17710.6},{"time":1633355340,"value":17708.15},{"time":1633355400,"value":17707.2},{"time":1633355460,"value":17706.15},{"time":1633355520,"value":17702.95},{"time":1633355580,"value":17706.3},{"time":1633355640,"value":17710.95},{"time":1633355700,"value":17708.2},{"time":1633355760,"value":17709.5},{"time":1633355820,"value":17713.55},{"time":1633355880,"value":17714.5},{"time":1633355940,"value":17712.2},{"time":1633356000,"value":17713.05},{"time":1633356060,"value":17714.05},{"time":1633356120,"value":17703.2},{"time":1633356180,"value":17704.65},{"time":1633356240,"value":17704.7},{"time":1633356300,"value":17694.6},{"time":1633356360,"value":17699.3},{"time":1633356420,"value":17707},{"time":1633356480,"value":17704.9},{"time":1633356540,"value":17700.8},{"time":1633356600,"value":17703.45},{"time":1633356660,"value":17698.9},{"time":1633356720,"value":17700.45},{"time":1633356780,"value":17700.95},{"time":1633356840,"value":17699},{"time":1633356900,"value":17698.7},{"time":1633356960,"value":17696.4},{"time":1633357020,"value":17699.85},{"time":1633357080,"value":17695.4},{"time":1633357140,"value":17695.65},{"time":1633357200,"value":17693.4},{"time":1633357260,"value":17695.1},{"time":1633357320,"value":17687.95},{"time":1633357380,"value":17697.05},{"time":1633357440,"value":17696.3},{"time":1633357500,"value":17699.95},{"time":1633357560,"value":17702.4},{"time":1633357620,"value":17700.3},{"time":1633357680,"value":17698.25},{"time":1633357740,"value":17698.1},{"time":1633357800,"value":17705.8},{"time":1633357860,"value":17703.7},{"time":1633357920,"value":17701.2},{"time":1633357980,"value":17694.75},{"time":1633358040,"value":17684.05},{"time":1633358100,"value":17683.7},{"time":1633358160,"value":17686.2},{"time":1633358220,"value":17685.85},{"time":1633358280,"value":17686.1},{"time":1633358340,"value":17681.4},{"time":1633358400,"value":17687.65},{"time":1633358460,"value":17690.5},{"time":1633358520,"value":17694.85},{"time":1633358580,"value":17693.55},{"time":1633358640,"value":17695.65},{"time":1633358700,"value":17694.8},{"time":1633358760,"value":17694.4},{"time":1633358820,"value":17700.8},{"time":1633358880,"value":17697.25},{"time":1633358940,"value":17698.45},{"time":1633359000,"value":17696.95},{"time":1633359060,"value":17694.5},{"time":1633359120,"value":17697.2},{"time":1633359180,"value":17696.25},{"time":1633359240,"value":17693.1},{"time":1633359300,"value":17691.8},{"time":1633359360,"value":17694.6},{"time":1633359420,"value":17693.7},{"time":1633359480,"value":17691.35},{"time":1633359540,"value":17696.05},{"time":1633359600,"value":17700.8},{"time":1633359660,"value":17687},{"time":1633359720,"value":17687.1},{"time":1633359780,"value":17690.55},{"time":1633359840,"value":17693.1},{"time":1633359900,"value":17691.25},{"time":1633359960,"value":17689.85},{"time":1633360020,"value":17690.2},{"time":1633360080,"value":17690.65},{"time":1633360140,"value":17689.9},{"time":1633360200,"value":17692.5},{"time":1633360260,"value":17694.6},{"time":1633360320,"value":17697.2},{"time":1633360380,"value":17700},{"time":1633360440,"value":17697.7},{"time":1633360500,"value":17693.9},{"time":1633360560,"value":17690.6},{"time":1633360620,"value":17689.55},{"time":1633360680,"value":17688.9},{"time":1633360740,"value":17689.6},{"time":1633360800,"value":17693.35},{"time":1633360860,"value":17688.9},{"time":1633360920,"value":17690.75},{"time":1633360980,"value":17691.8},{"time":1633361040,"value":17694.35},{"time":1633361100,"value":17696.5},{"time":1633361160,"value":17695.8},{"time":1633361220,"value":17698.8},{"time":1633361280,"value":17693.45},{"time":1633361340,"value":17699.85},{"time":1633361400,"value":17699.7},{"time":1633363800,"value":17691.25}];

var height = '250';
var spotIntradayChart = LightweightCharts.createChart(container, {
height: height,
priceScale: {
scaleMargins: {
top: 0.35,
bottom: 0.2,
},
borderVisible: false,
},
timeScale: {
borderVisible: false,
visible : true,
timeVisible: true,
secondsVisible: false,
rightOffset : 1,
fixLeftEdge: true
},
grid: {
horzLines: {
color: '#eee',
visible: false,
},
vertLines: {
color: '#ffffff',
},
},
handleScroll : false,
handleScale : false,
axisPressedMouseMove : false
});
const whitespacesSeries = spotIntradayChart.addAreaSeries();
var series = spotIntradayChart.addAreaSeries({	
bottomColor : 'rgba(43, 124, 70,0.04)',
topColor : 'rgba(43, 124, 70,0.5)',
lineColor : 'rgb(43, 124, 70)',
lineWidth: 2
});
//console.log(series);
if(data != null){
whitespacesSeries.setData(data);
series.setData(actualData);

spotIntradayChart.timeScale().fitContent();
var fromTime = 1633352640;
var chartStartTime = 1633319100;
var chartEndTime = 1633341780;
var toTime = '';
var nextCall = 'N';
var lastTime = 1633363800;
var chartLineColor = 'rgb(43, 124, 70)';
series.setMarkers([{
time: lastTime,
position: 'inBar',
color: chartLineColor,
shape: 'circle',
}]);
if(nextCall == 'Y'){
spotChartInterval = setInterval(function(){ 	
//console.log("in spot interval function");
var tempToTime = Math.floor((Date.now() / 1000)+120);
var toDateTime = new Date();
var seconds = toDateTime.getSeconds();
if(seconds < 15){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":00").getTime() / 1000;
}else if(seconds > 15 && seconds < 30){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":15").getTime() / 1000;
}else if(seconds > 30 && seconds < 45){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":30").getTime() / 1000;
}else if(seconds > 45){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":45").getTime() / 1000;
}
toTime = toTime + 120;
fromTime = toTime - 240;
console.log(fromTime+" : "+toTime);
if(tempToTime > chartEndTime){
clearInterval(spotChartInterval);
}else{
if(! isNaN(fromTime) && !isNaN(toTime)){
$.ajax({
type: "GET",
url: "https://priceapi.moneycontrol.com/techCharts/intra",
data: { symbol : "9", resolution : 1, from : fromTime, to: toTime },
// dataType: "json",
beforeSend: function() {
},

success: function(result) {
if(result.s == 'ok'){
for (var i = 0; i < result.data.length; i++) {
if(result.data[i].time >= lastTime){
series.update(result.data[i]);
}
}
lastTime = result.data[(result.data.length - 1)].time;
series.setMarkers([{
time: lastTime,
position: 'inBar',
color: chartLineColor,
shape: 'circle',
}]);
spotIntradayChart.timeScale().applyOptions({ fixLeftEdge: true })
spotIntradayChart.timeScale().fitContent();
}else if(result.s == 'no_data'){
//clearInterval(spotChartInterval);
}
}
});
}
}
}, 1000 * 15);
}
}
}
