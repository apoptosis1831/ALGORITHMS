#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

queue<int> q;
vector<bool> check;

int solution(int N, vector<vector<int>> road, int K) {
    check.resize(N+1,false);
    vector<int> min_dis(N+1,500001);

    int answer=0;
    q.push(1);
    min_dis[1]=0;
    while(!q.empty())
    {
        int town=q.front();
        if(!check[town] && min_dis[town]<=K)
        {
            check[town]=true;
            answer++;
        }
        for(vector<int> r : road)
        {
            if(r[0]==town && r[1]!=1 && min_dis[r[1]] > r[2]+min_dis[town])
            {
                q.push(r[1]);
                min_dis[r[1]]=r[2]+min_dis[town];
            }
            if(r[1]==town && r[0]!=1 && min_dis[r[0]] > r[2]+min_dis[town])
            {
                q.push(r[0]);
                min_dis[r[0]]=r[2]+min_dis[town];
            }
        }
        q.pop();
    }

    return answer;
}

int main()
{
    int N=5, K=3;
    vector<vector<int>> r=
    {{1,2,1},{2,3,3},{5,2,2},{1,4,2},{5,3,1},{5,4,2}};
    
    cout << solution(N, r, K);
    return 0;
}
