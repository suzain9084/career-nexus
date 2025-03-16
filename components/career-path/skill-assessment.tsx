"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, BarChart } from "lucide-react"

export function SkillAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("technical")

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers(Array(questions.length).fill(null))
    setShowResults(false)
  }

  const calculateScore = (category: string) => {
    const categoryQuestions = questions.filter((q) => q.category === category)
    const categoryAnswers = categoryQuestions.map((_, index) => {
      const questionIndex = questions.findIndex((q) => q.category === category && q.id === categoryQuestions[index].id)
      return answers[questionIndex]
    })

    const correctAnswers = categoryAnswers.filter(
      (answer, index) => answer === categoryQuestions[index].correctAnswer,
    ).length

    return {
      score: correctAnswers,
      total: categoryQuestions.length,
      percentage: Math.round((correctAnswers / categoryQuestions.length) * 100),
    }
  }

  const filteredQuestions = questions.filter((q) => q.category === selectedCategory)
  const currentQuestionData = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="space-y-6">
      {!showResults ? (
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Skill Assessment</CardTitle>
                <CardDescription>
                  Question {currentQuestion + 1} of {questions.length}
                </CardDescription>
              </div>
              <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="hidden md:block">
                <TabsList>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
                  <TabsTrigger value="industry">Industry Knowledge</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-xl font-semibold">{currentQuestionData.question}</h3>

            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer} className="space-y-3">
              {currentQuestionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer flex-grow">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button onClick={nextQuestion} disabled={answers[currentQuestion] === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              {currentQuestion !== questions.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Assessment Results</CardTitle>
              <CardDescription>Here's how you performed in different skill categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {["technical", "soft-skills", "industry"].map((category) => {
                  const result = calculateScore(category)
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium capitalize">{category.replace("-", " ")}</h3>
                        <span className="text-sm font-medium">
                          {result.score}/{result.total} ({result.percentage}%)
                        </span>
                      </div>
                      <Progress value={result.percentage} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        {result.percentage >= 70
                          ? "Strong proficiency. You have a solid foundation in this area."
                          : result.percentage >= 40
                            ? "Moderate proficiency. Some areas need improvement."
                            : "Needs development. Focus on building skills in this area."}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Skill Development Recommendations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Take the "Advanced JavaScript Patterns" course to strengthen your technical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <span>Practice conflict resolution scenarios to improve your soft skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <span>Read industry publications to stay current with market trends</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={resetAssessment}>
                Retake Assessment
              </Button>
              <Button>
                <BarChart className="h-4 w-4 mr-2" />
                View Detailed Report
              </Button>
            </CardFooter>
          </Card>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Recommended Learning Paths</CardTitle>
              <CardDescription>Based on your assessment results, we recommend these learning paths</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Frontend Development Mastery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Strengthen your JavaScript skills and learn advanced React patterns.
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-muted-foreground">Estimated time: 8 weeks</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Path
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Technical Leadership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Develop the soft skills needed to lead technical teams effectively.
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-muted-foreground">Estimated time: 6 weeks</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Path
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

const questions = [
  {
    id: 1,
    category: "technical",
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Symbol"],
    correctAnswer: "Float",
  },
  {
    id: 2,
    category: "technical",
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 3,
    category: "technical",
    question: "Which HTTP method is used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    id: 4,
    category: "soft-skills",
    question: "A team member disagrees with your approach to a project. What's the best first step?",
    options: [
      "Defend your position firmly",
      "Listen to understand their perspective",
      "Escalate to a manager",
      "Ignore their input and proceed with your plan",
    ],
    correctAnswer: "Listen to understand their perspective",
  },
  {
    id: 5,
    category: "soft-skills",
    question: "Which of the following is most important for effective remote work?",
    options: ["Working long hours", "Clear communication", "Having the latest technology", "Multitasking"],
    correctAnswer: "Clear communication",
  },
  {
    id: 6,
    category: "industry",
    question: "Which technology is NOT typically associated with DevOps?",
    options: ["Docker", "Kubernetes", "Jenkins", "Photoshop"],
    correctAnswer: "Photoshop",
  },
  {
    id: 7,
    category: "industry",
    question: "What is the primary goal of Agile methodology?",
    options: [
      "Eliminating the need for documentation",
      "Delivering working software quickly and iteratively",
      "Reducing the role of project managers",
      "Increasing development costs",
    ],
    correctAnswer: "Delivering working software quickly and iteratively",
  },
  {
    id: 8,
    category: "technical",
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Automated Program Interaction",
      "Application Process Integration",
      "Advanced Programming Interface",
    ],
    correctAnswer: "Application Programming Interface",
  },
]

