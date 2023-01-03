---
title: About Swift Struct
date: '2022-12-26T14:57:44.919Z'
slug: about-swift-struct
author: Ryan Setiagi
git: https://github.com/masbossun/masbossun-site/blob/main/src/lib/posts/about-swift-struct.md
preview: Swift Structure or Struct is a data types that can store multiple values with different types. Swift structs have a lot of similarity with class, most of the time struct will be used instead of class.
---

Swift Structure or Struct is a data types that can store multiple values with different types. Swift structs have a lot of similarity with class, most of the time struct will be used instead of class. On the other hand, use class when needed, like this specific cases:

- Inheritance enables one class to inherit the characteristics of another.
- Type casting enables you to check and interpret the type of a class instance at runtime.
- Deinitializers enable an instance of a class to free up any resources it has assigned.
- Reference counting allows more than one reference to a class instance.

```swift
// struct definition
struct PeopleStruct {
  // ...
}

// class definition
class PeopleClass {
  // ...
}
```

For consistency, use `UpperCamelCase` for struct and class name, and use `lowerCamelCase` for properties and methods.

```swift
struct People {
  // properties
  var name = "Joy"
  var age = 24

  // method
  func greeting() {
    print("Hello \(name)"
  }
}
```

To utilize the struct, create an instance by assigning it to a value. Each struct instance is identical, any changes on specific instance will not affects another instance.

```swift
// struct instances
let somePeople = People()
let anotherPeople = People()

print(somePeople.name) // Will print "Joy"
print(somePeople.age) // Will print 24

somePeople.greeting() // Will print "Hello Joy"

// modify the properties of instance `somePeople`
somePeople.name = "Boy"

somePeople.greeting() // Will print "Hello Boy"
anotherPeople.greeting() // Will print "Hello Joy"
```

Struct types automatically receive a _memberwise initializer_, which means struct instance can be initialized automatically without writing any additional initializer. Initial value of the properties on the new instance will be passed to the memberwise initializer by name.

```swift
let joy = People()
let boy = People(name: "Boy", age: 21)

print(joy.name) // Will print "Joy"
print(boy.name) // will print "Boy"
```

Unlike class that is a _Reference Type_, struct is a _Value Type_ which has a technique called _copy on write_ means it only copies data whenever it changed.

```swift
let boy = People(name: "Boy", age: 21)
let boyCopy = boy
boy.age = 24 // swift will create another copy of boy instance

print(boy.age) // will print 21
print(boyCopy.age) // will print 24
```

## Intersting Topics

- [Initialization](https://docs.swift.org/swift-book/LanguageGuide/Initialization.html)
- [Equivalence Operators](https://docs.swift.org/swift-book/LanguageGuide/AdvancedOperators.html#ID45)
- [Properties](https://docs.swift.org/swift-book/LanguageGuide/Properties.html)
- [Methods](https://docs.swift.org/swift-book/LanguageGuide/Methods.html)
- [Protocols](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html)

## References

- https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html
- https://developer.apple.com/documentation/swift/choosing-between-structures-and-classes
- https://www.hackingwithswift.com/read/0/15/structs
- https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-both-classes-and-structs
