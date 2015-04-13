
function ReverseAString(str){
  var bstr = "";
  for (var i = 0; i < str.length; i++){
      bstr = str[i] + bstr;
  }
    str = bstr;
    return str;
  };
