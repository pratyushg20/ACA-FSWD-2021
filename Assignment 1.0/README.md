### Here is the list of CMD commands I learnt recently-
1. `cd` ->to change directory
    - `cd..` ->to go up one level
    - `cd\` ->to go to the root directory/drive
2. `d:` ->to change the drive from C to D , similarly we can can change from D to C by using `c:`
3. `dir` ->to view the contents of the present directory
4. `mkdir` _`folder`_ ->to make new directory/folder
5. `ren` _`folder`_ _`new folder name`_ ->to rename a folder
    - `ren` _`filename.extension`_ _`new_file_name.extension`_ ->to rename a file
6. `copy` _`location/filename.extension`_ _`new_location/new_filename.new_extension`_
7. `xcopy /s /i` _`location/folder`_ _`new_location/new_folder`_ -> to copy folders (and their contents).
8. `del` _`folder`_ ->to delete all the files within a folder (but it will not delete that folder), add `/h` to delete the hidden files within that folder.
    - `del` _`filename.extension`_ ->to delete a file in the current directory
    - `del *.DOCX` –> delete all files with the DOC extension (you can use any file extension necessary, DOCX is just an example);
    - `del Test*.*` –> delete all files beginning with Test;
    - `del *.*` –> delete ALL files from the current folder.
9. `rd` _`directory`_ ->to delete the **_empty_** directory
10. `help` ->to get a list of all the available commands in CMD with a small description of each
    - `help` _`command`_ ->to get a detailed description of a particular command
11. _`application`_`.exe`--> ->to launch an application from the CMD(you have to be in the directory containing the application to execute this command).

###  Here is a short description of some common terminologies in web-development-
1. **Clientside**-Clientside means that the action takes place on the user's (the client's) computer.
2. **Serverside**-Serverside means that the action takes place on a web server.
3. **HTTP (Hypertext Transfer Protocol)**-The communications protocol used to connect to Web servers on the Internet or on a local network (intranet). The primary function of HTTP is to establish a connection with the server and send HTML pages back to the user's browser.It is the foundation of any data exchange on the Web and it is a client-server **protocol**, which means requests are initiated by the recipient, usually the Web browser.
4. **http _vs_ https**-Hypertext Transfer Protocol Secure is an extension of the Hypertext Transfer Protocol. It is used for secure communication over a computer network, and is widely used on the Internet. HTTPS established an encrypted link between the browser and the web server using the **Secure Socket Layer (SSL)** or **Transport Layer Security (TLS)** protocols.
5. **Frameworks _vs_ Libraries**-Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the flow of the application. A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it. This is called **Inversion of Control**.
