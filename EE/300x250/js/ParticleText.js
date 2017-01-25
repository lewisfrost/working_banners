(function(window) {

	ParticleText = function(_fontClass,_fontSize,_lines,_align,_lineHeight) {

		_fontClass = _fontClass;
		console.log(_fontClass.$NAME);
		_fontSize = _fontSize || 30;
		_lines = _lines || ["TEST"];
		_align = _align || "left";
		_lineHeight = _lineHeight || _fontSize;

		//TODO - Implement default particle size in ControlParticles to save having to resize them according to font size...
		var $LIGHT = 1;
		var $REGULAR = 1.6;
		var $BOLD = 2;
		
		var _rows;
		var _columns;
		var _spacer;
		var _xPos;
		var _yPos;
		var _text;
				
		var _text_width;
		var _text_height;

		//var _scaleFactor = _fontSize/30;
		//default font size in the font class is 30, so resizing/repositioning has to be done relative to that.

		this.points = [];

		var _letterPos = 0;
		var _vertOffset = 0;
		var pointSizeFactor = 30;

		for (var i=0; i<_lines.length; i++) {

			_text = _lines[i];

			for (var j=0; j<_text.length; j++) {

				var char = _text.charAt(j);

				if (char != " ") {

					var LP = getPoints(char);

					for (var k=0; k<LP.length; k++) {

						var thisPoint = LP[k];
						var newPoint = new createjs.Point((thisPoint[0]*_fontSize/pointSizeFactor)+_letterPos, (thisPoint[1]*_fontSize/pointSizeFactor)+_vertOffset);
						this.points.push(newPoint);

					}

					_letterPos += _fontClass.getSpacing(_text.charAt(j),_text.charAt(j+1))*_fontSize/pointSizeFactor;

				} else {

					_letterPos += 8*_fontSize/pointSizeFactor;
				}
			}

			_vertOffset += _lineHeight;
			_letterPos = 0;

		}

		// define the width of the text (furthest right point minus furthest left)
		var farL = 0;
		var farR = 0;
		for (var p = 0; p<this.points.length; p++) {
			if (this.points[p].x < farL) { farL = this.points[p].x; }
			if (this.points[p].x > farR) { farR = this.points[p].x; }
		}
		_text_width = farR-farL;

		// Adjust point positions to account for alignment, now we know the width of the line
		for (var q = 0; q<this.points.length; q++) {
			if (_align == "center") {
				this.points[q].x -= _text_width/2;
			} else if (_align == "right") {
				this.points[q].x -= _text_width;
			}
		}

		// PRIVATE METHODS //
		////////////////////

		function getPoints(char) {

			var pts;

			if ("ABCEDFGHIJKLMNOPQRSTUVWXYx".indexOf(char) != -1)
			{
				pts = eval("_fontClass.$"+char+".slice(0)");
			}
			else
			{
				console.log("charCode is "+char.charCodeAt(0));
				//TODO: REWORK SO THAT POUND SYMBOL WORKS IN STRING
				switch (char)
				{
					case "0" :
						pts = _fontClass.$ZERO.slice(0);
						break;
					case "1" :
						pts = _fontClass.$ONE.slice(0);
						break;
					case "2" :
						pts = _fontClass.$TWO.slice(0);
						break;
					case "3" :
						pts = _fontClass.$THREE.slice(0);
						break;
					case "4" :
						pts = _fontClass.$FOUR.slice(0);
						break;
					case "5" :
						pts = _fontClass.$FIVE.slice(0);
						break;
					case "6" :
						pts = _fontClass.$SIX.slice(0);
						break;
					case "7" :
						pts = _fontClass.$SEVEN.slice(0);
						break;
					case "8" :
						pts = _fontClass.$EIGHT.slice(0);
						break;
					case "9" :
						pts = _fontClass.$NINE.slice(0);
						break;
					case "." :
						pts = _fontClass.$FULL_STOP.slice(0);
						break;					
					case ">" :
						pts = _fontClass.$GREATER_THAN.slice(0);
						break;
					case "<" :
						pts = _fontClass.$LESS_THAN.slice(0);
						break;
					case "?" :
						pts = _fontClass.$QUESTION_MARK.slice(0);
						break;
					case "!" :
						pts = _fontClass.$EXCLAMATION_MARK.slice(0);
						break;
					case "£" :
						pts = _fontClass.$POUND.slice(0);
						break;
					case "€" :
						pts = _fontClass.$EURO.slice(0);
						break;
					case "%" :
						pts = _fontClass.$PERCENTAGE.slice(0);
						break;
					case "&" :
						pts = _fontClass.$AMPERSAND.slice(0);
						break;
					case "^" :
						pts = _fontClass.$CIRCUMFLEX.slice(0);
						break;
					case "@" :
						pts = _fontClass.$AT_SYMBOL.slice(0);
						break;
					case "(" :
						pts = _fontClass.$OPEN_BRACKET.slice(0);
						break;
					case ")" :
						pts = _fontClass.$CLOSE_BRACKET.slice(0);
						break;
					case "+" :
						pts = _fontClass.$PLUS.slice(0);
						break;
					case "=" :
						pts = _fontClass.$EQUALS.slice(0);
						break;
					case "-" :
						pts = _fontClass.$DASH.slice(0);
						break;
					case "_" :
						pts = _fontClass.$UNDERSCORE.slice(0);
						break;
					case "/" :
						pts = _fontClass.$FORWARD_SLASH.slice(0);
						break;
					case "\"" :
						pts = _fontClass.$DOUBLE_QUOTE.slice(0);
						break;
					case "'" :
						pts = _fontClass.$SINGLE_QUOTE.slice(0);
						break;
					case ":" :
						//pts = _fontClass.$COLON.slice(0);
						pts = _fontClass.$POUND.slice(0);
						break;
					case ";" :
						pts = _fontClass.$SEMI_COLON.slice(0);
						break;
					case "," :
						pts = _fontClass.$COMMA.slice(0);
						break;
					case "#" :
						pts = _fontClass.$NUMBER_SIGN.slice(0);
						break;
					case "®" :
						pts = _fontClass.$REGISTERED_TRADEMARK.slice(0);
						break;
					case "™":
						pts = _fontClass.$TRADE_MARK.slice(0);
						break;
				   case "*":
				   		pts = _fontClass.$ASTERISK.slice(0);
						break;
				}
			}
			
			return pts;

		}
		

	}


})(window);