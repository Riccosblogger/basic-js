module.exports = function repeater(str, options) {

    function addition_sep (str, repeat, sep) {
        var result = '';
        for (var i=0; i<repeat; i++){
        if (i==0) result += str;
        else result += sep + str;
        }
        return result;
        }

        var result = '';
        str = String(str);
        options.addition = String(options.addition);
        
        if (options.repeatTimes===undefined) options.repeatTimes=1;
        if (options.additionRepeatTimes===undefined) options.additionRepeatTimes=1;
        if (options.separator===undefined) options.separator='+';
        if (options.additionSeparator===undefined) options.additionSeparator='|';
        if (options.addition==='undefined') options.addition='';
        
        for (var i=0; i<options.repeatTimes; i++){
        if (i==0)
        result += str + addition_sep(options.addition, options.additionRepeatTimes, options.additionSeparator);
        else result += options.separator + str + addition_sep(options.addition, options.additionRepeatTimes, options.additionSeparator);
        }
        return result;
        };
  