import .QTree.decode
import Colors.Gray
function imageof(layer::AbstractMatrix{UInt8})
    Gray.(decode(layer))
end

bitor(l) = reduce((a,b)->a.|b, l)