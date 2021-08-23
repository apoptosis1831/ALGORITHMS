#include <string>
#include <vector>
#include <iostream>
#include <map>
#include <algorithm>

using namespace std;

string str_to_map_key(string& info, string delim)
{
    string key="";
    int pos = info.find(delim);
    while(pos!=string::npos){
        key+=info.substr(0, pos);
        info.erase(0,pos+1);
        pos = info.find(delim);
    }
    return key;
}

vector<int> solution(vector<string> info, vector<string> query) {
    vector<int> answer(query.size());
    map<string, vector<int>> map; // key = info파싱 문자열 , value = key에 해당하는 사람들 점수
    
    for(string inf : info)
    {
        string key = str_to_map_key(inf, " ");
        map[key].push_back(stoi(inf));
    }
    for(auto iter = map.begin() ; iter!=map.end(); iter++)
        sort(iter->second.begin(), iter->second.end()); // 점수별로 map 오름차순 정렬 (이진탐색 위해 필요)
    int cnt=0;
    for(string cond : query)
    {
        vector<string> key;
        string tmp;
        tmp = cond.substr(0, cond.find(' '));
        if(tmp == "-") // 조건 추가
        {
            key.push_back("java");
            key.push_back("python");
            key.push_back("cpp");
        }
        else key.push_back(tmp);
        cond.erase(0, cond.find(' ')+5); // " and " erase 시켜주기
        
        tmp = cond.substr(0, cond.find(' '));
        if(tmp == "-")
        {
            vector<string> key2(key.size());
            copy(key.begin(), key.end(), key2.begin()); // key2에 key복사
            for(int i=0; i<key.size() ; i++)
            {
                key[i]+="backend";
                key2[i]+="frontend";
            }
            key.insert(key.end(), key2.begin(), key2.end()); // key2, key 합쳐주기
        }
        else
        {
            for(int i=0; i<key.size(); i++)
                key[i]+=tmp;
        }
        cond.erase(0, cond.find(' ')+5);
        
        tmp = cond.substr(0, cond.find(' '));
        if(tmp == "-")
        {
            vector<string> key2(key.size());
            copy(key.begin(), key.end(), key2.begin()); // key2에 key복사
            for(int i=0; i<key.size() ; i++)
            {
                key[i]+="junior";
                key2[i]+="senior";
            }
            key.insert(key.end(), key2.begin(), key2.end());
        }
        else
        {
            for(int i=0; i<key.size(); i++)
                key[i]+=tmp;
        }
        cond.erase(0, cond.find(' ')+5);

        tmp = cond.substr(0, cond.find(' '));
        if(tmp == "-")
        {
            vector<string> key2(key.size());
            copy(key.begin(), key.end(), key2.begin()); // key2에 key복사
            for(int i=0; i<key.size() ; i++)
            {
                key[i]+="chicken";
                key2[i]+="pizza";
            }
            key.insert(key.end(), key2.begin(), key2.end());
        }
        else
        {
            for(int i=0; i<key.size(); i++)
                key[i]+=tmp;
        }
        cond.erase(0, cond.find(' ')+1);
        
        for(int i=0; i<key.size() ; i++)
        {
            vector<int>::iterator index = lower_bound(map[key[i]].begin(),map[key[i]].end(), stoi(cond));
            // stoi(cond)보다 높은 수 중 제일 작은 수 탐색해서 iterator 반환
            answer[cnt] += map[key[i]].size() - (index - map[key[i]].begin());
        }
        cnt++;
    }
    return answer;
}

int main()
{
    vector<string> info={"java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"};
    vector<string> query={"java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"};
    vector<int> answer = solution(info, query);
    for(int i : answer)
        cout<< i <<" ";
}
