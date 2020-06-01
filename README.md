<h2> Запуск WebTaskManager </h2>
<ul>
  <li> 
    Скачать проект <code>git clone https://github.com/m-aks/wtm.git</code> 
  </li>
  <li> 
    Открыть командную строку к папке с Docker-compose файлом и ввести команду <code>docker-compose up</code>
  </li>  
  <li> 
    После запуска контейнеров открыть в браузере <code>http://localhost:8383/</code> - страница PhpMyAdmin
  </li>  
  <li> 
    Создать базу данных с именем <code>webtaskmanager</code> и импортировать в нее sql-файл из папки db
  </li>  
  <li> 
    Перейти по адресу <code>http://localhost:8282/</code>. Готово!
  </li>
</ul>
