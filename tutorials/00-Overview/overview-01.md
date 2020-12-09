# Kotlin이 뭐예요?

## 목차

---

- [Kotlin 이란?](#kotlin-이란)
- [Kotlin 의 특징](#kotlin-의-특징)
- [그래서, 왜 사용하는 거죠?](#그래서-왜-사용하는-거죠)

## Kotlin 이란?

IntelliJ IDEA, Android Studio 등으로 잘 알려진 JetBrains 사가, 2010 년대 초 야심차게 발표한 오픈 소스 프로그래밍 언어로, 2019 년 Google I/O 에서 공식적으로 안드로이드 개발에서 Kotlin 을 우선으로 하겠다는 정책을 밝혀 크게 화제가 된 언어이기도 합니다!

흔히 Kotlin 이라고 할 때는 주로 Java 가상 머신 위에서 작동하는 Kotlin/JVM 을 뜻하며, 이 외에도 다양한 플랫폼을 제공해 주고 있습니다.

- Kotlin/JVM: Java 와 100% 호환되는 특징을 가지며, JVM (Java Virtual Machine) 위에서 작동하도록 Bytecode (*.class) 형태로 컴파일됩니다.
- [Kotlin/JS](https://kotlinlang.org/docs/reference/js-overview.html): Javascript ES5 를 타겟으로 하며, 공식적으로 [많은 라이브러리 래퍼들](https://github.com/JetBrains/kotlin-wrappers)을 제공해주고 있습니다. React 등을 활용한 프론트엔드부터, Node.js 를 이용한 서버사이드까지 정말 다양한 것들을 할 수 있습니다. 다만, 아직까지 Kotlin/JVM 만큼 많은 사랑을 받고 있지는 못한다는게 안타까운 현실입니다.
- [Kotlin/Native](https://kotlinlang.org/docs/reference/native-overview.html): LLVM 컴파일러 기반의 네이티브 구현체이며, 별다른 VM이나 런타임 없이 작동 가능하여 Windows 부터 macOS, Linux, Android, iOS 등의 운영체제와 arm, x86, x86_64 등의 아키텍쳐를 모두 지원합니다.
- [Kotlin Multiplatform Mobile (KMM)](https://kotlinlang.org/lp/mobile/): Android 와 iOS 두 플랫폼을 통합하는 새로운 SDK 이며, 아직 알파 단계에 있지만 개발자들의 많은 관심을 받고 있습니다.

## Kotlin 의 특징

- 간결한 문법! 기존의 Java 코드에 비해 상당히 짧고 간결하며, 직관적이여서 코드를 읽기 쉽습니다!
- Mutable (변경 가능한 객체) 와 Immutable (변경 불가능한 객체) 를 변수 선언때 결정! (var / val)
- Null 오류로부터 안전! 객체 선언할 때 부터 null 지정 가능 여부를 결정해야 해서 Java 와 같은 NullPointerException 을 볼 일이 많이 줄어듭니다!
- 타입 추론! 코드 작성이 편해지며, 보기에도 깔끔합니다!
- 다른 특징들은 직접 해보면서 알아봅시다!

## 그래서, 왜 사용하는 거죠?

- 무궁무진한 사용 플랫폼, 발전 가능성
- 기존의 Java 코드를 변환해서 사용하기도 쉽고, 상호 호환이 100% 보장되므로 같이 사용하는것도 가능!
- 간결한 문법으로 입문하기 쉬운 언어!

## 정리

이번 튜토리얼을 통해, Kotlin 언어와 친해질 수 있는 계기가 되었으면 좋겠습니다!

[<-- 이전 페이지로](README.md) | [다음 페이지로 -->](overview-02.md)

