#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
//#include <sstream>

using namespace std;

vector<string> split(string input, string delim)
{
    vector<string> answer;
    while(input.find(delim)!=string::npos)
    {
        string temp=input.substr(0,input.find(delim));
        answer.push_back(temp);
        input.erase(0, input.find(delim)+delim.length());
    }
    answer.push_back(input);
    return answer;
}
vector<vector<int>> split(vector<string> str_arr)
{
    vector<vector<int>> answer(str_arr.size());
    int size=str_arr.size();
    int cnt=0;
    str_arr[size-1].erase(str_arr[size-1].find("}}"),2);
    str_arr[0].erase(0, str_arr[0].find("{{")+2);

    for(string str : str_arr)
    {
        vector<string> nums = split(str, ",");
        for(string num : nums)
        {
            answer[cnt].push_back(stoi(num));
        }
        cnt++;
    }
    return answer;
}

bool sort_func(pair<int,int> a, pair<int,int> b)
{
    if(a.second == b.second) return a.first > b.first;
    return a.second > b.second;
}

vector<int> solution(string s) {
    map<int,int> map;
    
    vector<int> answer;

    vector<string> string_arr= split(s, "},{");
    vector<vector<int>> split_number = split(string_arr);

    for(vector<int> num_vec : split_number)
    {
        for(int num : num_vec)
        {
            map[num]++;
        }
    }
    vector<pair<int,int>> vec(map.begin(), map.end());
    sort(vec.begin(), vec.end(), sort_func);
    for(auto n : vec)
    {
        answer.push_back(n.first);
    }

    

    return answer;
}

int main()
{
    string s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
    vector<int> answer = solution(s);
    for(int i : answer)
        cout<< i <<" ";
}