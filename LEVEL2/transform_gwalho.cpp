#include <string>
#include <vector>
#include <iostream>
#include <stack>

using namespace std;

int split_func(string p)
{
    int val=0;
    for(int i=0; i<p.length(); i++)
    {
        if(p[i]=='(')
        val+=1;
        else
        val-=1;
        if(val==0)
            return i;
    }
    return p.length();
}

bool is_right(string str)
{
    stack<string> st;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '(')
            st.push("(");
        else
        {
            if(st.empty())
                return false;
            st.pop();
        }
    }
    return true;
}
string reverse(string str)
{
    string new_str="";
    for(char c : str)
    {
        if(c==')')
            new_str+='(';
        else
            new_str+=')';
    }
    return new_str;
}
string arrange(string str) // 첫문자, 마지막문자 제거
{
    return str.substr(1, str.length()-2);
}
string solution(string p) {
    
    if(p=="")
        return p;
    int index=split_func(p);
    string u=p.substr(0, index+1);
    string v=p.substr(index+1);
    if(is_right(u))
    {
        u += solution(v);
        return u;
    }
    string answer = "(";
    answer += solution(v)+")";
    answer += reverse(arrange(u));

    return answer;
}

int main()
{
    string w= "()))((()";
    cout << solution(w);
}