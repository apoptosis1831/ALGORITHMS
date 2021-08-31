#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(int m, int n, vector<string> board) {
    int answer = 0;
    int kk=0, ii=0;
    string str;
    str.resize(30);
    vector<string> new_board(30, str); // board�� new_board�� ���� (���� ���� �ƴ� �������� ���ϰ�)
    for(int k=0; k<n ; k++, ii++)
    {
        string tmp;
        for(int i=0; i<m; i++, kk++)
        {
            tmp.push_back(board[i][k]);
        }
        reverse(tmp.begin(), tmp.end());
        new_board[k]= tmp;
    }

    bool flag = true;
    bool stop_flag=false;
    int dx[]={1,0,1};
    int dy[]={0,1,1};

    while(!stop_flag)
    {
        vector<bool> tmp(30, false);
        vector<vector<bool>> check(30, tmp); // 4���� ���� ã���� true�� üũ���ִ� 2���� bool
        flag=true;
        stop_flag=true;
        for(int x=0; x<n-1; x++)
        {
            for(int y=0; y<m-1 ; y++)
            {
                if(new_board[x][y]=='-')
                    continue;
                for(int t=0; t<3; t++) // ��� ���� ������, �Ʒ�, �밢��(������ �Ʒ�) �˻�
                {
                    if(new_board[x+dx[t]][y+dy[t]] == '-'|| new_board[x][y] != new_board[x+dx[t]][y+dy[t]]) // �ش� ���� '-' �̰ų� ��� ���� �ٸ���
                    {
                        flag=false;
                        break;
                    }
                }
                if(flag)
                {
                    check[x][y]=true;
                    for(int t=0; t<3; t++)
                        check[x+dx[t]][y+dy[t]] = true;
                    stop_flag=false; // while�� Ż�� ���ϰ� stop flag = false�� ������ش�
                }
                flag=true;
            }
        }
        if(stop_flag) break;
        for(int x=0, xx=0; x<n; x++, xx++)
        {
            int cnt=0;
            for(int y=0, yy=0; y<m; y++, yy++)
            {
                if(check[x][y]) // 2���� bool �迭�� Ȯ���Ͽ� 2x2 �� ���ְ�
                {
                    cnt++; answer++;
                    new_board[xx].erase(new_board[xx].begin()+yy);
                    yy--;
                }
            }
            for(int i=0; i<cnt; i++) // ������ ���� - ����
                new_board[xx].push_back('-');
        }   
    }
    
    return answer;
}

int main()
{
    vector<string> board= {"CCBDE", "AAADE", "AAABF", "CCBBF"};
    //vector<string> board= {"TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"};
    int m=4;
    int n=5;
    for(int i=0; i<m; i++)
    {
        for(int k=0; k<n; k++)
        {
            cout<< board[i][k] <<" ";
        }
        cout<<endl;
    }
    cout<<endl;
    cout<<solution(m,n, board);
    return 0;
}