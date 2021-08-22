#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

vector<string> solution(vector<string> orders, vector<int> course)
{
    vector<string> answer;
    map<string, int> map;
   // vector<string> arr;

    for (int i = 0; i < course.size(); i++)
    {
        map.clear();
        for (string str : orders)
        {
            sort(str.begin(), str.end());
            if(str.length() < course[i]) continue;
            vector<bool> temp(str.length(), false);
            for(int q=0; q<course[i] ; q++)
                temp[q]=true; // 초기화
            
            do{
                string key="";
                for(int s=0; s<str.length() ; s++)
                {
                    if(temp[s])
                        key+=str[s];
                }
                map[key]++;
                //arr.push_back(key);

            }while(prev_permutation(temp.begin(), temp.end()));
            // 조합 다 생성
        }
        // arr정리 (개수)
        int max_val=0;
        vector<string> course_answer;
        for(auto iter=map.begin() ; iter!=map.end(); iter++)
        {
            if(iter->second==1) continue;
            if(max_val <= iter->second)
            {
                if(max_val==iter->second)
                {
                    course_answer.push_back(iter->first);
                }
                else
                {
                    course_answer.clear();
                    max_val=iter->second;
                    course_answer.push_back(iter->first);
                }
            }

        }
        answer.insert(answer.end(), course_answer.begin(), course_answer.end());
    }
    sort(answer.begin() , answer.end());
    return answer;
}

int main()
{
    vector<string> orders = {"XYZ", "XWY", "WXA"}; //{"ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"};
    vector<int> course = {2, 3, 4};
    vector<string> answer = solution(orders, course);
    for (string s : answer)
        cout << s << endl;
    return 0;
}