#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

bool*** isVisited;
//bool isVisited[500][500][4]={false,};
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1}; // up, left, down, right
vector<string> gridd;

int check_len(int x,int y,int dir,int row, int col)
{
    int res=0;
    while(1)
    {
        if(isVisited[x][y][dir]) break; // 이미 빛이 한번 간 경로라면 사이클 생성됨
        isVisited[x][y][dir]=true;
        res++; // 빛이 가는 경로
        x+=dx[dir];
        y+=dy[dir];

        if(x>=row) x-=row;
        if(x<0) x+=row;
        if(y>=col) y-=col;
        if(y<0) y+=col; // grid 밖으로 나간 경우

        switch (gridd[x][y])
        {
        case 'L':
            dir = (dir+1)%4;
            break;
        case 'R':
            dir = (dir+3)%4;
            break;
        }
    }
    return res;
}

vector<int> solution(vector<string> grid) {
    vector<int> answer;
    gridd=grid;
    int row = grid.size(); // 행 개수
    int col = grid[0].length(); // 열 개수
    
    isVisited = new bool ** [row];
    for(int i=0; i< row ; i++)
    {
        isVisited[i] = new bool * [col];
        for(int k=0; k<col ; k++)
            {
                isVisited[i][k] = new bool[4];
                for(int j=0; j<4 ; j++)
                    isVisited[i][k][j]=false; // 이거 안해주면 프러그래머스에서 답 안나옴
            }
    } // 3차원 배열 동적할당

    //memset(isVisited, false, sizeof(isVisited));
    //fill(isVisited[0], isVisited[0]+(row*col*4), false);
    // "다차원 배열 초기화하는 방법 구글링 해서 나온거"

    for(int x=0; x<row; x++)
    {
        for(int y=0; y<col; y++)
        {
            for(int d=0 ; d<4 ; d++)
            {
                if(isVisited[x][y][d]) continue;
                int result = check_len(x,y,d,row,col); // 모든 노드에서 상하좌우 방향 모두 체크
                answer.push_back(result);
            }
        }
    }
    sort(answer.begin(),answer.end()); // 오름차순 소팅
    return answer;
}

int main()
{
    vector<string> grid={"R","R"};
    vector<int> result = solution(grid);
    for(int i : result)
        cout << i << endl;
}