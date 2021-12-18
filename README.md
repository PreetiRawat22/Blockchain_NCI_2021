# readme#
This is the readme file for project. It contain useful command required to run the project.


## Install Visual Studio Code ##
Below link can be used to install visual studio code depending on the system's configuration.
```https://code.visualstudio.com/Download```

## Install Git ##

1. create an github account at github.com

2. Git is installed locally

```https://github.com/git-guides/install-git```

## Install Node.js ##
Below link can be used for installing node.js and steps suggested in the link should be followed:

```https://nodejs.org/en/download/```
## cloning a repository ##
create a folder for project. Go into it. for private repository run below command:
``` Git clone https://PreetiRawat22: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@github.com/PreetiRawat22/Blockchain_NCI_2021.git ```

to commit the changes to repo, run below command:
git commit -m 'modified readme.md'
git push origin main

## To update the code in local from the repository ##
after reaching the folder BLOCKCHAIN_NCI_2021 of project. From the visual studio terminal run below command:
``` git pull origin main ```


create contract.js for redad-only interaction file
to run it use below command:
```node contract.js```
 
 ##  view al running container ##
 ```docker ps -a```

### to see all images ###
 ```docker image ls```

 ### to build an image ###
 ```docker build -t nci/blockchain .```

### to run a image ###
```  docker run -p 8090:8080 --name blockchain20233507 -d nci/blockchain```

### to check for logs ###
```docker logs blockchain20233507``

### to view logs inside docker  ###
``` docker logs -f [name] ```
 ### to clear docker system ###
 ```docker system prune -a```

 ### remove docker images ###
 ```  docker image prune -a -f```

 ### To run the distribution ###
 ```  curl http://localhost:8090/distribute ```