current_dir=$(pwd)

cd "G:/final/new2"

echo "...............activating++++++++++++virtual++++++++++++ env...................."
. env/Scripts/activate

python manage.py runserver 8001  &

django_pid=$!

cd "Frontend/frontend"

npm run dev

kill $django_pid

cd "$current_dir"
