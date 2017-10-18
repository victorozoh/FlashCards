module.exports = ClozeCard;

// This is a constructor named ClozeCard. It takes two arguements, text, and cloze.
function ClozeCard (text, cloze){

  // scope-safe constructor
  if(!(this instanceof ClozeCard)){
		return new ClozeCard (text, cloze);
	}

  if(text.search(cloze) == -1){
    throw "Sorry " + cloze + " doesn't appear in " + text;
  }

	// set value of fullText
	this.fullText = text;
	// set the value of cloze
	this.cloze = cloze;
  // set the value for partial
	this.partial = text.replace(this.cloze, "...");

  console.log(this.fullText);
  console.log(this.partial);
  console.log(this.cloze);

}

//var
