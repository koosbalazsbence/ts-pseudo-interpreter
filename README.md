# Pseudo-code Interpreter in Typescript & Next.js

## Overview
This repository contains a small interpreter implemented in Typescript for a simplified pseudo-code language.  
The project was created for educational purposes, mainly to demonstrate fundamental concepts of **parsing, interpretation, and execution of high-level instructions**.  

Unlike full programming languages, this pseudo-code syntax is intentionally minimal. The focus is on supporting **basic algorithmic constructs** such as sequences, conditionals, and loops, in order to highlight the essential mechanisms of an interpreter without unnecessary complexity.  

## Language Specification

The pseudo-code language supports the following categories of instructions:

- **Sequence**  
  Instructions are executed in the order they appear.  

- **Input/Output**  
  ```
  input variable
  output expression
  ```

- **Conditionals**  
  ```
  if condition then
    instruction(s)
  else
    instruction(s)
  endif
  ```

- **Loops**  
  ```
  while condition do
    instruction(s)
  enddo
  ```

- **Termination**  
  ```
  stop
  ```

### Example Program
```
input n
x = 0
while n > 0 do
  x = x + n
  n = n - 1
enddo
output x
stop
```

This program computes the sum of integers from `n` down to `1`.  

## Design Approach
- **Lexical and Syntactic Parsing**  
  A basic parser converts pseudo-code text into an internal representation (abstract syntax tree or equivalent).  

- **Execution Model**  
  The interpreter traverses the representation and executes instructions according to the semantics defined above.  

- **Extensibility**  
  The language definition can be expanded with additional control structures, functions, or data types as needed.  

## Educational Goals
- Illustrate the relationship between **syntax** and **semantics** in programming languages.  
- Provide a simple environment for experimenting with interpreter construction.  
- Show how high-level control structures can be reduced to basic execution steps.  

## Disclaimer
This is a small-scale academic project and not intended for production use. Its main purpose is didactic: to serve as a starting point for students learning about language design and interpreters.  
