class LeadPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    manager? || owner?
  end

  def create?
    true
  end

  def update?
    manager? || owner?
  end

  def destroy?
    admin?
  end
  
  def export?
    manager?
  end
  
  class Scope < Scope
    def resolve
      if user&.role == 'admin' || user&.role == 'manager'
        scope.all
      else
        scope.where(user_id: user&.id)
      end
    end
  end
end