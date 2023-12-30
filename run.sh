# Save the current directory
current_dir=$(pwd)

# Change to the Django project directory
cd "C:/work/newsportels"

# Activate the virtual environment
echo "...............activating++++++++++++virtual++++++++++++ env...................."
source env/Scripts/activate  # Assuming you're using a virtual environment on Windows

# Run the Django server in the background
python manage.py runserver 8001 &

# Save the PID of the Django process
django_pid=$!

# Change to the frontend directory
cd "Frontend/frontend"

# Run the Vite development server
npm run dev

# Once the frontend development server is stopped, kill the Django server
kill $django_pid

# Return to the original directory
cd "$current_dir"
