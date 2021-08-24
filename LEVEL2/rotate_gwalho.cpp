#include <string>
#include <vector>
#include <iostream>
#include <stack>
#include <map>

using namespace std;

string rotate(string str) // 왼쪽으로 한칸씩 rotation 해주는 함수
{
    char c=str[0];
    string new_str="";
    int len=str.length();
    for(int i=1; i<len; i++)
        new_str += str[i];
    new_str += c;
    return new_str;
}

bool is_right(string str)
{
    map<int,int> map;
    map[40]=41; // map[(] == }
    map[123]=125; // map[{] == }
    map[91]=93; // map[[]] == ]
    stack<int> st;
    st.push(str[0]);
    for (int i = 1; i < str.length(); i++)
    {
        if(st.empty()) {st.push(str[i]); continue;}
        if(str[i]==map[st.top()]) st.pop(); // () , {}, [] 일 경우 pop()
        else st.push(str[i]);
    }
    if (st.empty())
        return true;
    return false;
}
int solution(string s) {
    int answer = 0;
    if(s.length()%2!=0) return 0; // 괄호 개수 홀수인 경우 올바른 괄호 못됨
    for(int i=0; i<s.length()-1; i++)
    {
        if(is_right(s)) answer++;
        s= rotate(s);
    }
    return answer;
}

int main()
{
    string str="[](){}";
    cout << solution(str);
}