#include <string>
#include <vector>
#include <iostream>
#include <map>
#include <algorithm>
#include <math.h>

using namespace std;

int solution(vector<vector<string>> relation) {
    map<string, int> m;
    int answer = 0;
    int size_attr=relation[0].size();
    int size_tuple=relation.size();
    vector<int> binary_candidate_key;
    for(int i=1; i<=size_attr ; i++) // �Ӽ� ������ŭ �ݺ� (��� ���� �˻�)
    {
        int binary_key=0;
        vector<bool> tmp(size_attr-i, false);
        tmp.insert(tmp.end(), i, true);
        do{
            bool flag =true;
            for(int s=0; s<size_tuple; s++) // Ʃ�� ������ŭ �˻�
            {
                string key="";
                binary_key=0; // �������� �Ӽ� ǥ��
                for (int k = 0; k < size_attr; k++)
                {
                    if (tmp[k])
                    {
                        key += relation[s][k]+"|";
                        binary_key += pow(2,size_attr-k-1); // �Ӽ� �������� ����
                    }
                    else
                    key+="-|"; // �ĺ�Ű �ƴ� �Ӽ��� �� - �� ǥ��
                }
                int result=0;
                for(int a : binary_candidate_key)
                {
                    result = a&binary_key;
                    if(result == a) {flag=false; break;} // a�� binary_key�� ���ԵǸ� flag==false
                }


                m[key]++; // key�� �ش��ϴ� map �� ����
                if (m[key] > 1)
                {
                    flag = false;
                    break;
                }
            }
            if(flag) {answer++; binary_candidate_key.push_back(binary_key);}
        }while(next_permutation(tmp.begin(), tmp.end()));
    }

    return answer;
}
int main()
{
    /*
    vector<vector<string>> r=
    {{"100","ryan","music","2"},
    {"200","apeach","math","2"},
    {"300","tube","computer","3"},
    {"400","con","computer","4"},
    {"500","muzi","music","3"},
    {"600","apeach","music","2"}};*/
    vector<vector<string>> r= {{"a","aa"},{"aa","a"},{"a","a"}};
    cout << solution(r) ;
}