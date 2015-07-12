function removeiFrame()
{
	var elements=document.getElementsByTagName('IFRAME');
	console.log("removeiFrame: elements.length:" + elements.length);
	while(elements.length > 0)
	{
		elements[0].parentNode.removeChild(elements[0]);
	}
}

console.log("before executing ... ");
removeiFrame();
console.log("after executing");
