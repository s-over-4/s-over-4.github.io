# Hello!

I am a human being, who probably does not live in _your_ walls. I have mediocre programming skills, but enjoy pretending that I know what I'm doing while fixing someone’s printer.

## Who are you? 

Jacat, as well as any combination of letters, numbers, and operators, notably c+1 and s/4. I enjoy writing short stories, camping, mountain biking, drone photography, photographing drones, photographing drones from drones, and photographing birds.

### What does c+1 _mean_?
Nothing.
### Where are you?
A swamp in New England.
### What is your favorite character?
ᓎ it looks like a little face!
### What is your favorite editor?
VS Code
### What is your favorite language?
English.
### What is your name?
c+1, Jacat, s/4
### What is your quest?
I seek the Holy Grail!
### What is your favorite color?
#9000ff
### What is the airspeed of an unladen swallow?
Eastern or European?
### What?! I don't know tha- AAAAAAAAUUUUGGHHH!




```markdown
import random as r
import string as s
letter = r.choice(list(s.ascii_lowercase))
operator = r.choice(["!","^","*","-","+","/"])
number = r.choice([i for i in range(10)])
if letter == "c":
    operator = "+"
    number = 1
elif letter == "s":
    operator = "/"
    number = 4
else:
    pass
print(letter+operator+str(number))
```

