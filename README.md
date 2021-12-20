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

## To check the node.js, git are installed ##

for checking if git is installed run below command:
```$git version```

for checking if node.js ins installed run below command:
```$node -v```

## create your repo ##
First create your own repository in the github.
run below commands:
1. cloning a repository
create a folder for project. Go into it. for public repository run below command:

``` git clone https://github.com/PreetiRawat22/Blockchain_NCI_2021.git```

2. to commit the changes to repo, run below command:

```git add <file names>```

```git commit -m 'comment'```

```git push origin main```

## To update the code in local from the repository ##
after reaching the folder BLOCKCHAIN_NCI_2021 of project. From the visual studio terminal run below command:
``` git pull origin main ```


## To run a js file use below command: ##
```$node <file name>```
 
## To install the dependencies ##
To use code others have written, for example to communicate with etherium we need web3 package.
from inside the folder, to create your own package.json:
```npm install```

## Accessing the handers ##
To run distribute method:
```curl http://localhost:8090/distribute```

## Docker ##
###  view all running container ###
 ```docker ps -a```

### to see all images ###
 ```docker image ls```

### to build an image ###
 ```docker build -t nciblockchain .```

### to run a image ###
```  docker run -p 8090:8080 --name blockchain20233507 -d nciblockchain```

### to check for logs ###
```docker logs blockchain20233507```

### to view logs inside docker  ###
``` docker logs -f [name] ```
### to clear docker system ###
 ```docker system prune -a```

### remove docker images ###
 ```docker image prune -a -f```

### to remove a particular image ###
```  docker rmi preeti22/nciblockchain  ```

###  to stop a particular container ###
``` docker stop <container_id>```

### To login into docker hub ###
``` docker login ```

 ### to tag image for docker hub ###
 ```docker tag nciblockchain:latest preeti22/nciblockchain```

 ### push docker image ###
 ``` docker push preeti22/nciblockchain```

### to pull an image for docker hub ###
``` docker pull preeti22/nciblockchain ```

### to run the pulled image ###
```docker run -p 8090:8080 preeti22/nciblockchain```

### To run the distribution ###
 ```  curl http://localhost:8090/distribute ```


