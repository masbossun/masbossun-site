---
title: About SwiftUI State and Binding
date: "2022-12-25T00:00:00.000Z"
slug: about-swiftui-state-and-binding
author: Ryan Setiagi
git: https://github.com/masbossun/masbossun-next/blob/main/_posts/about-swiftui-state-and-binding.mdx
preview: SwiftUI State and Binding are the property wrapper type. Use these state properties to change how the UI should behave.
---

SwiftUI `State` and `Binding` are the property wrapper type. Use these state properties to change how the UI should behave.

SwiftUI State is like state in react, it store a data and its value can be read by UI component and also can be updated as well. To use it, add prefix `@State` before variable initialization. Use `private` to ensures the state only accessible in the same view that declares them.

```swift
import SwiftUI

struct WishlistButton: View {
  @State private var isWishlisted: Bool = false

  var body: some View {
    Toggle("Wishlist", isOn: isWishlisted)
  }
}
```

While the `State` is like a `state` in react, then the `Binding` is like a `props`. It passes the `State` from the parrent so it can be read and safely mutated from any thread. Apply `$` prefix on the value passed to a `Binding` properties.

```swift
import SwiftUI

struct WishlistButton: View {
  @Binding var isWishlisted: Bool

  var body: some View {
    Toggle("Wishlist", isOn: $isWishlisted)
  }
}

struct BuildingCard: View {
  @State private var isWishlisted = false

  var body: some View {
    VStack {
      Text(isWishlisted ? "On your wishlist" : "Add to wishlist")
      // add `$` prefix to `isWishlisted` Binding property
      WishlistButton(isWishlisted: $isWishlisted)
    }
  }
}
```

If the data passes to View doesn't need to be modified, use a standard Swift property instead of `Binding`.

```swift
import SwiftUI

struct WishlistButton: View {
  let label: String // Standard Swift property
  @State private var isWishlisted: Bool = false


  var body: some View {
    // `label` is read-only
    Toggle(label, isOn: isWishlisted)
  }
}
```

## Tip from Developer Documentation

> Don’t initialize a state property of a view at the point in the view hierarchy where you instantiate the view, because this can conflict with the storage management that SwiftUI provides. To avoid this, always declare state as private, and place it in the highest view in the view hierarchy that needs access to the value. Then share the state with any child views that also need access, either directly for read-only access, or as a binding for read-write access.

## References

- https://developer.apple.com/documentation/swiftui/managing-user-interface-state
- https://developer.apple.com/documentation/swiftui/State
- https://developer.apple.com/documentation/swiftui/binding
