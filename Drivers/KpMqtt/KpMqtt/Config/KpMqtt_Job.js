// Data example
// { "Val": 12.3, "Stat": 1 }
var data = JSON.parse(InMsg);

jsvals[0].TagName = "My tag";
jsvals[0].Stat = data.Stat;
jsvals[0].Val = data.Val;

mylog("Script completed successfully");
