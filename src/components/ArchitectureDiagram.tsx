import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Terminal,
  Code,
  Copy,
  Check,
} from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ArchitectureLayer {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  description: string;
  components: string[];
  invariants: string[];
  codeTitle: string;
  codeSnippet: string;
}

const CLEAN_LAYERS: ArchitectureLayer[] = [
  {
    id: 'presentation',
    name: 'Presentation Layer',
    badge: 'Cross-Platform Client Surfaces',
    icon: Layers,
    accentColor: 'text-primary',
    accentBg: 'bg-primary/10',
    borderColor: 'border-primary/40',
    description:
      'Pure declarative client surfaces across Flutter (iOS, Android, Web) and React 18. Zero direct database queries or raw socket protocols. UI widgets react strictly to immutable state streams.',
    components: [
      'Flutter (iOS, Android, Web targets)',
      'React 18 + Vite Observability SPA',
      'Material 3 Adaptive Layouts',
      'BLoCBuilder & BLoCConsumer Widgets',
    ],
    invariants: [
      'Strict separation from business logic and database drivers',
      'Frame budget optimized for smooth 60fps/120fps rendering',
      'UI is a deterministic mathematical function of current state',
    ],
    codeTitle: 'Flutter Presentation Widget (Consuming BLoC)',
    codeSnippet: `// Pure Declarative UI Surface - Zero Direct Data Logic
class OrderExecutionView extends StatelessWidget {
  const OrderExecutionView({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<OrderBloc, OrderState>(
      builder: (context, state) {
        if (state is OrderExecuting) {
          return const CircularProgressIndicator.adaptive();
        }
        if (state is OrderExecuted) {
          return OrderConfirmationBadge(orderId: state.order.id);
        }
        return PlaceOrderButton(
          onTap: () => context.read<OrderBloc>().add(SubmitOrderIntent()),
        );
      },
    );
  }
}`,
  },
  {
    id: 'application',
    name: 'Application & State Layer',
    badge: 'Reactive Orchestration',
    icon: Cpu,
    accentColor: 'text-accent-violet',
    accentBg: 'bg-accent-violet/10',
    borderColor: 'border-accent-violet/40',
    description:
      'Deterministic state orchestration. Manages event streams, transforms user intents into Use Case invocations, handles connection lifecycles, and publishes immutable state updates.',
    components: [
      'BLoC / Cubit State Machines',
      'Native WebSocket Lifecycle Manager',
      'TanStack Query Server State Cache',
      'Riverpod Unidirectional Providers',
    ],
    invariants: [
      'Unidirectional event-to-state stream (UDF)',
      'Zero memory leaks via strict subscription cancellation',
      '100% unit-testable state transitions via bloc_test',
    ],
    codeTitle: 'Reactive BLoC / Cubit State Machine',
    codeSnippet: `// Unidirectional BLoC Pattern - Deterministic State Flow
class TradingTelemetryCubit extends Cubit<TelemetryState> {
  final TelemetryRepository _repository;
  StreamSubscription? _sub;

  TradingTelemetryCubit(this._repository) : super(TelemetryInitial());

  void subscribeToFeed(String symbol) {
    emit(TelemetryConnecting());
    _sub?.cancel();
    _sub = _repository.streamPriceTicks(symbol).listen(
      (tick) => emit(TelemetryLive(tick)),
      onError: (err) => emit(TelemetryCircuitBroken(err.toString())),
    );
  }

  @override
  Future<void> close() {
    _sub?.cancel();
    return super.close();
  }
}`,
  },
  {
    id: 'domain',
    name: 'Domain Layer (Pure Core)',
    badge: 'Enterprise Business Invariants',
    icon: ShieldCheck,
    accentColor: 'text-accent-cyan',
    accentBg: 'bg-accent-cyan/10',
    borderColor: 'border-accent-cyan/40',
    description:
      'The sovereign enterprise core. Has zero dependencies on Flutter, React, databases, or third-party SDKs. Contains pure entities, transactional use cases, repository contracts, and circuit breakers.',
    components: [
      'Pure Business Entities & Value Objects',
      'Transactional Use Cases (Interactors)',
      'Repository Contracts (Abstract Interfaces)',
      'Risk Circuit Breakers & Invariants',
    ],
    invariants: [
      'Complete independence from external frameworks (Dependency Inversion)',
      'Pure Dart / Python business calculations and validation rules',
      'Survives UI rewrites, framework upgrades, and API migrations',
    ],
    codeTitle: 'Pure Domain Interactor & Repository Contract',
    codeSnippet: `// Pure Domain Use Case - Zero Framework Coupling
abstract class OrderRepository {
  Future<Either<Failure, Order>> submitOrder(OrderDraft draft);
  Stream<OrderState> watchOrderStatus(String orderId);
}

class PlaceOrderUseCase {
  final OrderRepository repository;
  PlaceOrderUseCase(this.repository);

  Future<Either<Failure, Order>> call(OrderDraft draft) {
    if (!draft.isValid) return Left(InvalidOrderFailure());
    return repository.submitOrder(draft);
  }
}`,
  },
  {
    id: 'data',
    name: 'Data & Infrastructure Layer',
    badge: 'Cloud & Local Stores',
    icon: Database,
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    borderColor: 'border-amber-400/40',
    description:
      'Implements domain repository contracts. Handles API networking, serialization, SQLite/Hive local caching, real-time WebSocket connections, and external broker integrations.',
    components: [
      'Firebase (Firestore, Auth, Cloud Functions)',
      'SQLite & Hive (Offline-First Engines)',
      'Angel One SmartAPI Broker Client',
      'REST & GraphQL Client Adapters',
    ],
    invariants: [
      'Implements domain interfaces without leaking data models outward',
      'Optimistic local writes with idempotent background synchronization',
      'Hardware resilience and safe broker reconciliation',
    ],
    codeTitle: 'Repository Implementation & Offline Cache',
    codeSnippet: `// Concrete Infrastructure Adapter Implementing Domain Interface
class CachedOrderRepository implements OrderRepository {
  final LocalSqliteStorage _localDb;
  final RemoteApiClient _apiClient;

  CachedOrderRepository(this._localDb, this._apiClient);

  @override
  Future<Either<Failure, Order>> submitOrder(OrderDraft draft) async {
    try {
      final remoteOrder = await _apiClient.postOrder(draft.toJson());
      await _localDb.upsertOrder(remoteOrder.toModel());
      return Right(remoteOrder.toEntity());
    } catch (e) {
      return Left(ServerFailure(e.toString()));
    }
  }
}`,
  },
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('domain');
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeLayer =
    CLEAN_LAYERS.find((l) => l.id === selectedLayerId) || CLEAN_LAYERS[2];

  const handleCopyCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(activeLayer.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full rounded-2xl p-6 lg:p-8 relative bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass">
      {/* Blueprint Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
            <Terminal className="w-4 h-4 text-accent-cyan" />
            <span>Interactive Clean Architecture Blueprint</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1 font-heading">
            Enterprise Clean Architecture &amp; System Boundary Model
          </h3>
          <p className="text-xs sm:text-sm text-dark-textMuted mt-1">
            Hover or tap any architectural layer to inspect its boundary rules, dependency flow, and production code contracts.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-dark-surfaceElevated px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-dark-textMuted self-start md:self-auto shrink-0">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>Dependency Rule: Dependencies point Inward → Domain</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Layer Stack Interactive Visualizer (Left Column, 6 cols) */}
        <div
          role="tablist"
          aria-label="Clean Architecture Layers"
          className="lg:col-span-6 flex flex-col gap-3.5"
        >
          {CLEAN_LAYERS.map((layer, index) => {
            const isSelected = layer.id === selectedLayerId;
            const Icon = layer.icon;

            return (
              <React.Fragment key={layer.id}>
                <div
                  role="tab"
                  tabIndex={0}
                  aria-selected={isSelected}
                  aria-controls={`layer-panel-${layer.id}`}
                  onClick={() => setSelectedLayerId(layer.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedLayerId(layer.id);
                    }
                  }}
                  className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 border relative outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isSelected
                      ? `bg-dark-surfaceElevated ${layer.borderColor} shadow-glass ring-1 ring-white/10`
                      : 'bg-dark-surface/50 border-white/5 hover:border-white/20 hover:bg-dark-surfaceElevated/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                          isSelected
                            ? `${layer.accentBg} ${layer.borderColor} ${layer.accentColor}`
                            : 'bg-black/30 border-white/5 text-dark-textMuted group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-dark-textDim font-bold">
                            0{index + 1}
                          </span>
                          <h4
                            className={`font-bold text-sm sm:text-base ${
                              isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'
                            }`}
                          >
                            {layer.name}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-dark-textMuted">
                          {layer.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold transition-all ${
                          isSelected
                            ? `${layer.accentBg} ${layer.accentColor} ${layer.borderColor}`
                            : 'bg-black/20 text-dark-textDim border-white/5'
                        }`}
                      >
                        {isSelected ? 'INSPECTING' : 'VIEW'}
                      </span>
                    </div>
                  </div>

                  {/* Components Tag Strip */}
                  <div className="mt-3.5 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {layer.components.map((comp) => (
                      <span
                        key={comp}
                        className="text-[10.5px] font-mono px-2 py-0.5 rounded-lg bg-black/30 border border-white/5 text-dark-textMuted"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Data-Flow Connector Arrows between Layers */}
                {index < CLEAN_LAYERS.length - 1 && (
                  <div
                    className="flex items-center justify-center -my-1 py-0.5"
                    aria-hidden="true"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-mono text-dark-textDim">
                      <ArrowDown
                        className={`w-3.5 h-3.5 ${
                          !prefersReducedMotion ? 'animate-bounce' : ''
                        } text-primary/70`}
                      />
                      <span>Inward Flow</span>
                      <ArrowUp className="w-3.5 h-3.5 text-accent-cyan/70" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detailed Inspection & Code Contract Drawer (Right Column, 6 cols) */}
        <div
          id={`layer-panel-${activeLayer.id}`}
          role="tabpanel"
          className="lg:col-span-6 w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={`p-6 sm:p-7 rounded-2xl bg-dark-surfaceElevated border ${activeLayer.borderColor} shadow-glass`}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span
                  className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${activeLayer.accentBg} ${activeLayer.accentColor} ${activeLayer.borderColor}`}
                >
                  {activeLayer.badge}
                </span>
                <span className="text-xs font-mono text-dark-textDim">LAYER CONTRACT</span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2 font-heading">
                {activeLayer.name}
              </h4>
              <p className="text-xs sm:text-sm text-dark-textMuted leading-relaxed mb-5 font-normal">
                {activeLayer.description}
              </p>

              {/* Invariants */}
              <div className="mb-6 space-y-2.5">
                <h5 className="text-[11px] font-mono uppercase tracking-wider text-dark-textDim font-bold">
                  Architectural Invariants:
                </h5>
                <ul className="space-y-2">
                  {activeLayer.invariants.map((inv, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-dark-textMuted leading-relaxed"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${activeLayer.accentColor}`}
                      />
                      <span className="text-white/85">{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Code Snippet Box */}
              <div className="code-editor-surface rounded-xl bg-[#090A10] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#121422] border-b border-white/10 text-xs font-mono text-dark-textMuted">
                  <div className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="text-white/90 text-[11px] font-semibold truncate">
                      {activeLayer.codeTitle}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    aria-label="Copy code snippet to clipboard"
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Code contract preview"
                  className="p-3.5 overflow-x-auto text-[11px] font-mono text-white/90 leading-relaxed max-h-[260px] no-scrollbar focus:outline-none focus:ring-1 focus:ring-primary/40"
                >
                  <pre>
                    <code>{activeLayer.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
