---
title: My Confusion in Learning Swift
date: '2022-12-18T09:47:23.385Z'
slug: my-confusion-in-learning-swift
author: Ryan Setiagi
git: https://github.com/masbossun/masbossun-site/blob/main/src/lib/posts/my-confusion-in-learning-swift.md
preview: This is my journey on learning swift and iOS development. I decide to write my learning here as a second brain, also to keep my learning consistent.
---

This is my journey on learning swift and iOS development. I decide to write my learning here as a second brain, also to keep my learning consistent.

Today i learnt some basic of swift programming language from [Apple Developer](https://developer.apple.com/swift/) Site and familiarize with swift syntaxes from [learn x in y minutes](https://learnxinyminutes.com/docs/swift/).

After reading and practicing basic syntax of swift, i found swift is an easy programming language to understand because it looks similar with any other modern programming language. My 3 years experience in typescript is also helping me learning swift very well because they have similarities in terms of the types syntaxes.

But there are some confusions that i discovered while learning swift programming language.

Swift offers so many ways to do or solve the things, and this make me as a newcomer confuse. Like, which approaches i need to use, or what is the drawback of using A rather than B and etc. For example here is how we deal with data that might be `nil` or empty or in swift it called **optional value**.

```swift
let someOptionalString: String? = "optional" // this value might be nil
// let someOptionalString: Optional<String> = "optional"
// `String?` and `Optional<String>` are the same thing


if someOptionalString != nil {
  // `someOptionalString` is guaranteed not `nil`
  print(someOptionalString)
}

// use `if let` or `if var`
if let someGuaranteedString = someOptionalString {
  // `someGuaranteedString` is guaranteed not `nil`
  // use `someGuaranteedString` on this block
  print(someGuaranteedString)
}

// they also have fallback `??` syntax
let someOptionalStringWithFallback =
  someOptionalString ?? "you got the fallback!"
```

I also dealing this kind of confusions while learing any other programming language, they offers so many options for us developer to choose whichever approaches that suites with our own needs. So, it's my job as a developer to find the reason why choosing the specific approach and the answer might come later along with practices and learnings.
