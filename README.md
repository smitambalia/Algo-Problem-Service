# LeetCode like Project

## Project Folder Structure

- controllers
- services
- routes
- repositories
- config
- utils
- validators
- errors

--------------------


### Best Practices with folder structure


## How routing is working in the proeject 

- api/v1/problems/ping
    - router starts with /api
    -> /api      -> v1      -> problems         /ping or /              -> business logic 
    -> apiRouter -> v1Router -> problemRouter  -> problemController -> service layer


    
## Reason to seperate the repository later seperate

- For Example : 
    - our problem is stroring the data in to MongoDB , repository is being created for the same database , and 
        and the service is injecting a repository.
    - In the service , repository object can be created , therefore my service can create any repository ( which    eventually uses any databases )
    - support to any database in the future can be integraded with ease.