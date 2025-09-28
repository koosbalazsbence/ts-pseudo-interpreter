"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Play, Code, Terminal, AlertCircle, HelpCircle } from "lucide-react"

export function PseudocodeInterpreter() {
  const [pseudocode, setPseudocode] = useState("")
  const [inputs, setInputs] = useState("")
  const [output, setOutput] = useState("")
  const [errors, setErrors] = useState("")
  const [isExecuting, setIsExecuting] = useState(false)

  const handleExecution = async () => {
    setIsExecuting(true)
    // Simulate execution delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setOutput("Execution completed successfully!")
    setErrors("")
    setIsExecuting(false)
  }

  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h1 className="text-lg sm:text-xl font-semibold text-foreground">
                  Pseudocode Interpreter
                </h1>
              </div>
              <Badge variant="secondary" className="text-xs">
                v2.0
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                onClick={handleExecution}
                disabled={isExecuting || !pseudocode.trim()}
                className="gap-2 w-full sm:w-auto"
              >
                <Play className="h-4 w-4" />
                {isExecuting ? "Executing..." : "Execute"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Algorithm Instructions - Takes up 2 columns on desktop */}
          <div className="xl:col-span-2 order-1">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Algorithm Instructions
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="text-xs self-start sm:self-center"
                  >
                    Required
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Textarea
                  placeholder="Write your pseudocode here...

Example:
BEGIN
  INPUT number
  IF number > 0 THEN
    OUTPUT 'Positive'
  ELSE
    OUTPUT 'Not positive'
  ENDIF
END"
                  value={pseudocode}
                  onChange={(e) => setPseudocode(e.target.value)}
                  className="flex-1 code-editor resize-none min-h-[300px] sm:min-h-[400px] bg-muted/30"
                />
              </CardContent>
            </Card>
          </div>

          {/* Program Inputs */}
          <div className="order-2">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Program Inputs
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Specify each input value in separate lines
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Textarea
                  placeholder="Enter input values...

Example:
42
Hello World
3.14"
                  value={inputs}
                  onChange={(e) => setInputs(e.target.value)}
                  className="flex-1 code-editor resize-none min-h-[150px] sm:min-h-[200px] bg-muted/30"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Output Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Program Output */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-success">
                <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
                Program Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-md p-3 sm:p-4 min-h-[120px] sm:min-h-[150px] code-editor">
                {output ? (
                  <pre className="text-success whitespace-pre-wrap text-sm">
                    {output}
                  </pre>
                ) : (
                  <p className="text-muted-foreground italic">
                    Output will appear here after execution...
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Error Messages */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-error">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Error Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-md p-3 sm:p-4 min-h-[120px] sm:min-h-[150px] code-editor">
                {errors ? (
                  <pre className="text-error whitespace-pre-wrap">{errors}</pre>
                ) : (
                  <p className="text-muted-foreground italic">
                    No errors detected
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="mt-4 sm:mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Syntax Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Control Flow
                </h4>
                <ul className="space-y-1 text-muted-foreground code-editor">
                  <li>IF...THEN...ELSE...ENDIF</li>
                  <li>WHILE...DO...ENDDO</li>
                  <li>FOR...TO...DO...ENDFOR</li>
                  <li>REPEAT...UNTIL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Input/Output
                </h4>
                <ul className="space-y-1 text-muted-foreground code-editor">
                  <li>INPUT variable</li>
                  <li>OUTPUT expression</li>
                  <li>PRINT expression</li>
                  <li>READ variable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Operators</h4>
                <ul className="space-y-1 text-muted-foreground code-editor">
                  <li>+, -, *, /, MOD</li>
                  <li>=, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=</li>
                  <li>AND, OR, NOT</li>
                  <li>:= (assignment)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Structure</h4>
                <ul className="space-y-1 text-muted-foreground code-editor">
                  <li>BEGIN...END</li>
                  <li>PROCEDURE name</li>
                  <li>FUNCTION name</li>
                  <li>DECLARE variable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-8">
        <div className="text-center text-sm text-muted-foreground py-4">
          MIT License, {new Date().getFullYear()} Pseudocode Interpreter made by{" "}
          <a href="https://github.com/koosbalazsbence" className="underline">
            Koós Balázs Bence
          </a>
          <p className="mt-1 font-italic font-extralight">
            inspiration from:{" "}
            <a
              href="https://irh.inf.unideb.hu/~vargai/pseudocode/interpreter.php"
              className="underline"
            >
              Pseudocode Interpreter by Ádám Vargai
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
