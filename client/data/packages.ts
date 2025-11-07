export interface FlutterPackage {
  id: string;
  name: string;
  slug: string;
  pubUrl: string;
  description: string;
  shortDescription: string;
  category: 'State Management' | 'UI' | 'Database' | 'Network' | 'Animation' | 'Utility' | 'Architecture';
  icon: string;
  featured: boolean;
  proficiency: number;
  experienceYears: string;
  projectsUsed: number;
  useCases: string[];
  keyFeatures: string[];
  advantages: string[];
  challenges?: string[];
  codeSnippets: {
    title: string;
    description: string;
    code: string;
    language: string;
  }[];
  alternatives?: string[];
  worksWellWith?: string[];
  personalTake: string;
  bestPractices: string[];
  commonMistakes?: string[];
  officialDocs: string;
  githubStars?: string;
  pubLikes?: string;
  lastUpdated?: string;
}

export const flutterPackages: FlutterPackage[] = [
  {
    id: 'flutter-bloc',
    name: 'flutter_bloc',
    slug: 'flutter-bloc',
    pubUrl: 'https://pub.dev/packages/flutter_bloc',
    description: 'A predictable state management library that helps implement the BLoC (Business Logic Component) design pattern. It provides a robust way to separate business logic from UI, making apps more testable and maintainable.',
    shortDescription: 'Predictable state management with BLoC pattern',
    category: 'State Management',
    icon: '🎯',
    featured: true,
    proficiency: 95,
    experienceYears: '2+ years',
    projectsUsed: 15,
    useCases: [
      'Complex state management in large applications',
      'Apps requiring predictable state changes',
      'Projects needing extensive testing',
      'Team projects where state flow needs to be clear',
      'Apps with complex business logic',
    ],
    keyFeatures: [
      'Clear separation of business logic and UI',
      'Unidirectional data flow',
      'Built-in support for testing',
      'Time-travel debugging with bloc_test',
      'DevTools integration',
      'Stream-based architecture',
      'Excellent documentation and community',
    ],
    advantages: [
      'Highly testable architecture',
      'Predictable state changes',
      'Great for large teams',
      'Scales well with app complexity',
      'Strong typing support',
      'Excellent error handling',
    ],
    challenges: [
      'Steeper learning curve for beginners',
      'More boilerplate code compared to Provider',
      'Overkill for very simple apps',
      'Requires understanding of streams and reactive programming',
    ],
    codeSnippets: [
      {
        title: 'Basic Counter Bloc',
        description: 'Simple example showing events, states, and bloc implementation',
        language: 'dart',
        code: `// Events
abstract class CounterEvent {}
class CounterIncremented extends CounterEvent {}
class CounterDecremented extends CounterEvent {}

// Bloc
class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncremented>((event, emit) => emit(state + 1));
    on<CounterDecremented>((event, emit) => emit(state - 1));
  }
}

// Usage in Widget
BlocBuilder<CounterBloc, int>(
  builder: (context, count) {
    return Text('$count');
  },
)`,
      },
      {
        title: 'API Call with Bloc',
        description: 'Real-world example with loading, success, and error states',
        language: 'dart',
        code: `// States
abstract class UserState {}
class UserInitial extends UserState {}
class UserLoading extends UserState {}
class UserLoaded extends UserState {
  final User user;
  UserLoaded(this.user);
}
class UserError extends UserState {
  final String message;
  UserError(this.message);
}

// Bloc with API call
class UserBloc extends Bloc<UserEvent, UserState> {
  final UserRepository repository;
  
  UserBloc(this.repository) : super(UserInitial()) {
    on<FetchUser>((event, emit) async {
      emit(UserLoading());
      try {
        final user = await repository.getUser(event.id);
        emit(UserLoaded(user));
      } catch (e) {
        emit(UserError(e.toString()));
      }
    });
  }
}`,
      },
    ],
    alternatives: ['Provider', 'Riverpod', 'GetX', 'MobX'],
    worksWellWith: ['dio', 'equatable', 'freezed', 'injectable'],
    personalTake: "BLoC is my go-to for production apps. The initial setup takes more time, but it pays off massively in maintainability and testing. I've used it in 15+ projects and it consistently delivers predictable, scalable architecture. Perfect for apps that will grow over time.",
    bestPractices: [
      'Use Equatable for event and state classes to avoid unnecessary rebuilds',
      'Keep blocs focused on single responsibility',
      'Always close streams in dispose',
      'Use BlocObserver for debugging and analytics',
      'Implement proper error handling in every bloc',
      'Use bloc_test for comprehensive unit testing',
      'Leverage context.read() for events, context.watch() for state',
    ],
    commonMistakes: [
      'Creating god blocs that handle too much logic',
      'Not disposing blocs properly',
      'Using BlocBuilder when BlocListener is more appropriate',
      'Forgetting to add events, leading to unhandled states',
      'Not using Equatable, causing unnecessary rebuilds',
    ],
    officialDocs: 'https://bloclibrary.dev',
    githubStars: '11k+',
    pubLikes: '5000+',
    lastUpdated: '2024',
  },
  {
    id: 'dio',
    name: 'dio',
    slug: 'dio',
    pubUrl: 'https://pub.dev/packages/dio',
    description: 'A powerful HTTP client for Dart with support for interceptors, global configuration, FormData, request cancellation, file downloading, timeout, and more. My preferred choice for all API communication.',
    shortDescription: 'Powerful HTTP client with interceptors',
    category: 'Network',
    icon: '🌐',
    featured: true,
    proficiency: 90,
    experienceYears: '2+ years',
    projectsUsed: 18,
    useCases: [
      'RESTful API integration',
      'File upload/download',
      'Authentication with token refresh',
      'API request/response logging',
      'Timeout and retry logic',
      'Request cancellation',
    ],
    keyFeatures: [
      'Interceptors for request/response modification',
      'Global configuration',
      'FormData and file uploading',
      'Request cancellation',
      'Timeout management',
      'HTTP2 support',
      'Certificate verification',
    ],
    advantages: [
      'More powerful than http package',
      'Built-in interceptor system',
      'Better error handling',
      'Supports transformers',
      'Great for complex API scenarios',
      'Active maintenance',
    ],
    challenges: [
      'Slightly more complex setup than http',
      'Larger package size',
      'May be overkill for very simple GET requests',
    ],
    codeSnippets: [
      {
        title: 'Basic Setup with Interceptors',
        description: 'Setting up Dio with logging and authentication',
        language: 'dart',
        code: `final dio = Dio(BaseOptions(
  baseUrl: 'https://api.example.com',
  connectTimeout: Duration(seconds: 5),
  receiveTimeout: Duration(seconds: 3),
));

// Add interceptors
dio.interceptors.add(LogInterceptor(
  requestBody: true,
  responseBody: true,
));

dio.interceptors.add(InterceptorsWrapper(
  onRequest: (options, handler) {
    final token = getToken();
    options.headers['Authorization'] = 'Bearer $token';
    return handler.next(options);
  },
  onError: (error, handler) {
    if (error.response?.statusCode == 401) {
      // Handle token refresh
    }
    return handler.next(error);
  },
));`,
      },
      {
        title: 'API Calls with Error Handling',
        description: 'Real-world usage with proper error handling',
        language: 'dart',
        code: `class ApiService {
  final Dio _dio;
  
  Future<User> getUser(String id) async {
    try {
      final response = await _dio.get('/users/$id');
      return User.fromJson(response.data);
    } on DioException catch (e) {
      if (e.type == DioExceptionType.connectionTimeout) {
        throw TimeoutException('Connection timeout');
      } else if (e.response?.statusCode == 404) {
        throw NotFoundException('User not found');
      }
      throw Exception('Failed to load user');
    }
  }
  
  Future<void> uploadFile(File file) async {
    final formData = FormData.fromMap({
      'file': await MultipartFile.fromFile(
        file.path,
        filename: file.path.split('/').last,
      ),
    });
    
    await _dio.post('/upload',
      data: formData,
      onSendProgress: (sent, total) {
        print('Progress: \${(sent / total * 100).toStringAsFixed(0)}%');
      },
    );
  }
}`,
      },
    ],
    alternatives: ['http', 'chopper', 'retrofit'],
    worksWellWith: ['flutter_bloc', 'freezed', 'json_serializable', 'pretty_dio_logger'],
    personalTake: "Dio is indispensable for any app with API communication. The interceptor system alone makes it worth using. I've handled everything from simple REST calls to complex file uploads with authentication refresh. It's reliable, feature-rich, and well-maintained.",
    bestPractices: [
      'Create a singleton Dio instance',
      'Use interceptors for authentication',
      'Implement proper error handling for all DioException types',
      'Set appropriate timeouts',
      'Use FormData for file uploads',
      'Leverage CancelToken for request cancellation',
      'Log requests in debug mode only',
    ],
    commonMistakes: [
      'Not handling different DioException types',
      'Creating multiple Dio instances unnecessarily',
      'Forgetting to set proper timeouts',
      'Not using CancelToken for long requests',
      'Exposing sensitive data in logs',
    ],
    officialDocs: 'https://pub.dev/packages/dio',
    githubStars: '12k+',
    pubLikes: '4500+',
    lastUpdated: '2024',
  },
  {
    id: 'shared-preferences',
    name: 'shared_preferences',
    slug: 'shared-preferences',
    pubUrl: 'https://pub.dev/packages/shared_preferences',
    description: 'Flutter plugin for reading and writing simple key-value pairs to persistent storage. Perfect for storing user preferences, settings, and small amounts of data.',
    shortDescription: 'Simple key-value persistent storage',
    category: 'Database',
    icon: '💾',
    featured: true,
    proficiency: 95,
    experienceYears: '2+ years',
    projectsUsed: 20,
    useCases: [
      'Storing user preferences (theme, language)',
      'Saving authentication tokens',
      'Caching small data',
      'Onboarding completion status',
      'App settings persistence',
    ],
    keyFeatures: [
      'Simple key-value storage',
      'Cross-platform support',
      'Synchronous and asynchronous APIs',
      'Support for multiple data types',
      'Fast read/write operations',
    ],
    advantages: [
      'Extremely easy to use',
      'No setup required',
      'Fast performance',
      'Cross-platform',
      'Perfect for simple data',
    ],
    challenges: [
      'Not suitable for complex data structures',
      'No encryption by default',
      'Limited to primitive types',
      'Not ideal for large datasets',
    ],
    codeSnippets: [
      {
        title: 'Basic Usage',
        description: 'Storing and retrieving different data types',
        language: 'dart',
        code: `// Initialize
final prefs = await SharedPreferences.getInstance();

// Save data
await prefs.setString('username', 'ayush');
await prefs.setInt('age', 25);
await prefs.setBool('isDarkMode', true);
await prefs.setDouble('rating', 4.5);
await prefs.setStringList('tags', ['flutter', 'dart']);

// Read data
final username = prefs.getString('username') ?? '';
final age = prefs.getInt('age') ?? 0;
final isDarkMode = prefs.getBool('isDarkMode') ?? false;

// Remove data
await prefs.remove('username');

// Clear all data
await prefs.clear();`,
      },
      {
        title: 'Theme Persistence Example',
        description: 'Real-world example for theme management',
        language: 'dart',
        code: `class ThemeService {
  static const _themeKey = 'theme_mode';
  
  Future<void> saveTheme(ThemeMode mode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_themeKey, mode.toString());
  }
  
  Future<ThemeMode> getTheme() async {
    final prefs = await SharedPreferences.getInstance();
    final themeString = prefs.getString(_themeKey);
    
    if (themeString == null) return ThemeMode.system;
    
    return ThemeMode.values.firstWhere(
      (mode) => mode.toString() == themeString,
      orElse: () => ThemeMode.system,
    );
  }
}`,
      },
    ],
    alternatives: ['hive', 'get_storage', 'sqflite'],
    worksWellWith: ['flutter_bloc', 'provider', 'riverpod'],
    personalTake: "Perfect for what it does - simple, persistent storage. I use it in every single project for user preferences and settings. Don't try to make it do more than it's designed for - use Hive or SQLite for complex data.",
    bestPractices: [
      'Create a wrapper service class for cleaner API',
      'Use constants for keys to avoid typos',
      'Provide default values when reading',
      "Don't store sensitive data without encryption",
      'Use for small data only',
      'Initialize once and reuse the instance',
    ],
    commonMistakes: [
      'Storing large amounts of data',
      'Storing sensitive data without encryption',
      'Not providing default values',
      'Calling getInstance() repeatedly',
    ],
    officialDocs: 'https://pub.dev/packages/shared_preferences',
    githubStars: '1.5k+',
    pubLikes: '3000+',
    lastUpdated: '2024',
  },
  {
    id: 'provider',
    name: 'provider',
    slug: 'provider',
    pubUrl: 'https://pub.dev/packages/provider',
    description: 'A wrapper around InheritedWidget to make state management easier and more reusable. Recommended by the Flutter team for simple to medium complexity apps.',
    shortDescription: 'Simple and efficient state management',
    category: 'State Management',
    icon: '📦',
    featured: true,
    proficiency: 90,
    experienceYears: '2+ years',
    projectsUsed: 12,
    useCases: [
      'Small to medium apps',
      'Dependency injection',
      'Simple state management',
      'Prototyping',
      'Learning state management',
    ],
    keyFeatures: [
      'Simple and intuitive API',
      'Minimal boilerplate',
      'Good performance',
      'Officially recommended',
      'Easy to learn',
      'Great for beginners',
    ],
    advantages: [
      'Low learning curve',
      'Less boilerplate than BLoC',
      'Perfect for small/medium apps',
      'Flutter team recommended',
      'Great documentation',
    ],
    challenges: [
      'Can become messy in large apps',
      'Less structure than BLoC',
      'Harder to test complex logic',
    ],
    codeSnippets: [
      {
        title: 'ChangeNotifier Pattern',
        description: 'Basic counter example with Provider',
        language: 'dart',
        code: `class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;
  
  void increment() {
    _count++;
    notifyListeners();
  }
  
  void decrement() {
    _count--;
    notifyListeners();
  }
}

// In main.dart
ChangeNotifierProvider(
  create: (_) => CounterProvider(),
  child: MyApp(),
)

// In widget
Consumer<CounterProvider>(
  builder: (context, counter, child) {
    return Text('\${counter.count}');
  },
)

// Or use context
context.read<CounterProvider>().increment();
final count = context.watch<CounterProvider>().count;`,
      },
    ],
    alternatives: ['flutter_bloc', 'riverpod', 'getx', 'mobx'],
    worksWellWith: ['dio', 'shared_preferences', 'freezed'],
    personalTake: "Provider is my choice for MVPs and smaller projects. It's quick to set up and gets the job done. For production apps with complex logic, I prefer BLoC, but Provider is perfect for prototyping.",
    bestPractices: [
      'Use Consumer only where needed',
      "Prefer context.read() for actions, context.watch() for state",
      "Don't put too much logic in ChangeNotifier",
      'Use MultiProvider for multiple providers',
      'Dispose resources in dispose()',
    ],
    commonMistakes: [
      'Overusing Consumer (causes unnecessary rebuilds)',
      'Using context.watch() in onPressed',
      'Creating providers in build method',
      'Not disposing resources',
    ],
    officialDocs: 'https://pub.dev/packages/provider',
    githubStars: '5k+',
    pubLikes: '4000+',
    lastUpdated: '2024',
  },
  {
    id: 'http',
    name: 'http',
    slug: 'http',
    pubUrl: 'https://pub.dev/packages/http',
    description: 'A composable, Future-based library for making HTTP requests. Great for simple REST integrations where you want minimal overhead.',
    shortDescription: 'Lightweight HTTP client for Dart',
    category: 'Network',
    icon: '🔗',
    featured: true,

    proficiency: 85,
    experienceYears: '2+ years',
    projectsUsed: 12,

    useCases: [
      'Simple REST API integration',
      'Lightweight clients without interceptors',
      'Quick prototypes and MVPs',
      'Streaming downloads and multipart uploads',
    ],

    keyFeatures: [
      'Simple GET/POST/PUT/DELETE API',
      'Supports headers, query parameters, and JSON bodies',
      'Multipart file upload',
      'Streamed requests and responses',
      'Timeout configuration',
      'Works on mobile, desktop, and server',
    ],

    advantages: [
      'Lightweight and easy to learn',
      'Great for simple use cases',
      'Small dependency footprint',
      'Part of Dart ecosystem, widely used',
    ],

    challenges: [
      'No built-in interceptors (manual handling needed)',
      'Fewer features than Dio for complex apps',
      'Manual retry, auth refresh, and logging strategies',
    ],

    codeSnippets: [
      {
        title: 'Basic GET request',
        description: 'Fetch JSON and decode it using dart:convert',
        language: 'dart',
        code: `import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> fetchUser(String id) async {
  final url = Uri.parse('https://api.example.com/users/' + id);
  final res = await http.get(url, headers: {
    'Accept': 'application/json',
  });
  if (res.statusCode == 200) {
    final data = jsonDecode(res.body);
    print('User name: ' + data['name']);
  } else {
    throw Exception('Failed with status ' + res.statusCode.toString());
  }
}`,
      },
      {
        title: 'POST with JSON body',
        description: 'Send JSON payload and parse the response',
        language: 'dart',
        code: `import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> createPost(Map<String, dynamic> payload) async {
  final url = Uri.parse('https://api.example.com/posts');
  final res = await http.post(
    url,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: jsonEncode(payload),
  );
  if (res.statusCode == 201) {
    final data = jsonDecode(res.body);
    print('Created with id: ' + data['id'].toString());
  } else {
    throw Exception('Create failed: ' + res.statusCode.toString());
  }
}`,
      },
    ],

    alternatives: ['dio', 'chopper', 'retrofit'],
    worksWellWith: ['provider', 'flutter_bloc', 'json_serializable'],

    personalTake: 'Ideal when you want something simple without the overhead of interceptors. I often start with http for MVPs and switch to Dio if requirements grow (auth refresh, logging, retries).',

    bestPractices: [
      'Create a small wrapper service for cleaner API',
      'Centralize base URL and headers',
      'Decode/encode JSON with dart:convert',
      'Handle non-200 responses explicitly',
      'Set timeouts appropriate to your API',
    ],

    commonMistakes: [
      'Sprinkling http calls across widgets',
      'Not handling network timeouts and errors',
      'Forgetting to set headers for JSON',
    ],

    officialDocs: 'https://pub.dev/packages/http',
    pubLikes: '8000+',
    lastUpdated: '2024',
  },
];

export const getPackageBySlug = (slug: string): FlutterPackage | undefined => {
  return flutterPackages.find((pkg) => pkg.slug === slug);
};

export const getPackagesByCategory = (category: string): FlutterPackage[] => {
  return flutterPackages.filter((pkg) => pkg.category === (category as any));
};

export const getFeaturedPackages = (): FlutterPackage[] => {
  return flutterPackages.filter((pkg) => pkg.featured);
};
