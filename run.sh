current_dir=$(pwd)

cd "C:\Users\neschal\Desktop\React\Internship\newsportels"

echo "...............activating++++++++++++virtual++++++++++++ env...................."
. env/Scripts/activate

python manage.py runserver 8001  &

django_pid=$!

cd "Frontend/frontend"

npm run dev

kill $django_pid

cd "$current_dir"
