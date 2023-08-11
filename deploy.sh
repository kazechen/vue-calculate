# 發生錯誤時執行終止指令
set -e

originUrl=$(git config --get remote.origin.url)

nowStatus=${originUrl:0:5}
echo $nowStatus
if [ $nowStatus = 'https' ]
then
  echo 'MODE: HTTPs'
  echo 'remote repository URL：'$originUrl
else
  echo 'MODE: SSH'
  echo 'remote repository URL：'$originUrl
fi

# 打包編譯
npm run build

#移動到打包資料夾下
cd dist
# 初始化並設置 Git
git init
git add -A
git commit -m "update";

# 上傳到 gh-pages
git push -f $originUrl main:gh-pages

cd -